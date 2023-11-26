import { Document, Query } from 'mongoose';
import { fieldMapping } from '@util/modelSearchFields';
interface PaginationResult {
  currentPage: number;
  limit: number;
  numberOfPages: number;
  next?: number;
  prev?: number;
}

class QueryServices<T extends Document> {
  mongooseQuery: Query<T[], T>;
  queryString: Record<string, any>;
  paginationResult: PaginationResult | undefined;

  constructor(mongooseQuery: Query<T[], T>, queryString: Record<string, any>) {
    this.mongooseQuery = mongooseQuery;
    this.queryString = queryString;
  }

  filter() {
    const queryStringObj: Record<string, any> = { ...this.queryString };
    const excludesFields: string[] = ['page', 'sort', 'limit', 'fields'];
    excludesFields.forEach((field) => delete queryStringObj[field]);
    // Apply filtration using [gte, gt, lte, lt]
    let queryStr = JSON.stringify(queryStringObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    this.mongooseQuery = this.mongooseQuery.find(JSON.parse(queryStr));

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy: string = this.queryString.sort.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.sort(sortBy);
    } else {
      this.mongooseQuery = this.mongooseQuery.sort('-createAt');
    }
    return this;
  }

  limitFields() {
    if (this.queryString.fields) {
      const fields: string = this.queryString.fields.split(',').join(' ');
      this.mongooseQuery = this.mongooseQuery.select(fields);
    } else {
      this.mongooseQuery = this.mongooseQuery.select('-__v');
    }
    return this;
  }

  search(modelName: string) {
    if (this.queryString.keyword) {
      let query: Record<string, any> = {};
      const regexQuery = { $regex: this.queryString.keyword, $options: 'i' };

      // Extract search field based each model
      const modelSearchFields = fieldMapping[modelName];
      if (modelSearchFields && modelSearchFields.length > 0) {
        // loop to concatenate all search fields
        const fieldConditions = modelSearchFields.map(field => ({ [field]: regexQuery }));
        // console.log(fieldConditions);//check query string
        query.$or = fieldConditions;
      } else {
        query = { name: regexQuery };
      }

      this.mongooseQuery = this.mongooseQuery.find(query);
    }
    return this;
  }

  paginate(countDocuments: number) {
    const page: number = this.queryString.page * 1 || 1;
    const limit: number = this.queryString.limit * 1 || 50;
    const skip: number = (page - 1) * limit;
    const endIndex: number = page * limit;

    // Pagination result
    const pagination: PaginationResult = {
      currentPage: page,
      limit: limit,
      numberOfPages: Math.ceil(countDocuments / limit),
    };

    // next page
    if (endIndex < countDocuments) {
      pagination.next = page + 1;
    }
    if (skip > 0) {
      pagination.prev = page - 1;
    }
    this.mongooseQuery = this.mongooseQuery.skip(skip).limit(limit);

    this.paginationResult = pagination;
    return this;
  }

  getPaginationResult(): PaginationResult | undefined {
    return this.paginationResult;
  }
}

export default QueryServices;
