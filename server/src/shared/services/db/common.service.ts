import { Model, Document, ObjectId } from 'mongoose';
import { Request, Response } from 'express';

import { IFilterRequest } from '@root/shared/interfaces/request.interface';
import { InternalServerError, NotFoundError } from '@global/errorHandler.global';
import QueryService from './query.service';

export type CommonFunctions<T extends Document> = {
  getOne: (req: Request, res: Response) => Promise<void>;
  createOne: (req: Request, res: Response) => Promise<void>;
  updateOne: (req: Request, res: Response) => Promise<void>;
  deleteOne: (req: Request, res: Response) => Promise<void>;
  getAll: (req: Request, res: Response) => Promise<void>;
  getAllByIds: (req: Request, res: Response, docIds: (string | ObjectId)[]) => Promise<void>;
  createMany: (req: Request, res: Response) => Promise<void>;
  updateMany: (req: Request, res: Response) => Promise<void>;
  softDeleteOne: (req: Request, res: Response) => Promise<void>;
  softDeleteMany: (req: Request, res: Response) => Promise<void>;
};

export const createCommonService = <T extends Document>(Model: Model<T>, modelName: string): CommonFunctions<T> => {

  const deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const document = await Model.findByIdAndDelete(id);
    if (!document) {
      throw new NotFoundError(`No document for this id: ${id}`);
    }

    res.status(204).send();
  };

  const softDeleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const document = await Model.findByIdAndUpdate(id, { deletedAt: new Date() }, { isDeleted: true });
    if (!document) {
      throw new NotFoundError(`No document for this id ${id}`);
    }

    res.status(204).send();
  };

  const updateOne = async (req: Request, res: Response) => {
    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!document) {
      throw new NotFoundError(`No document for this id ${req.params.id}`);
    }

    res.status(200).json({
      status: 'success',
      data: { document }
    });
  };

  const createOne = async (req: Request, res: Response) => {
    const document = await Model.create(req.body);
    if (!document) {
      throw new InternalServerError();
    }
    res.status(201).json({
      status: 'success',
      data: { document }
    });
  };

  const getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const document = await Model.findOne({ _id: id, isDeleted: { $ne: true } });
    if (!document) {
      throw new NotFoundError(`No document for this id: ${id}`);
    }
    res.status(200).json({
      status: 'success',
      data: { document }
    });
  };

  const getAll = async (req: IFilterRequest, res: Response) => {
    let filter = { isDeleted: { $ne: true } };
    if (req.filterObj) {
      filter = req.filterObj;
    }

    // [x] Build query (prepare it for the next stage 'execution)
    const documentCnt = await Model.countDocuments();
    const apiFeatures = new QueryService(Model.find(filter), req.query).paginate(documentCnt).filter().search(modelName).limitFields().sort();

    // [x] Execute query
    const { mongooseQuery, paginationResult } = apiFeatures;
    const documents = await mongooseQuery.exec();

    if (!documents) {
      throw new NotFoundError();
    }

    res.status(200).json({ status: 'success', results: documents.length, paginationResult, data: documents });
  };
  const createMany = async (req: Request, res: Response) => {
    const documents = await Model.create(req.body);
    if (!documents) {
      throw new InternalServerError();
    }
    res.status(201).json({
      status: 'success',
      data: { documents }
    });
  };

  const getAllByIds = async (req: IFilterRequest, res: Response, docIds: (string | ObjectId)[]) => {

    // [x] Fetch docs based on the extracted doc ids
    const users = await Model.find({ _id: { $in: docIds } });

    // [x] Apply additional filtering if specified in the request
    let filter = { isDeleted: { $ne: true } };

    // [x] Build and execute the query using QueryServices
    const documentCnt = users.length;
    const apiFeatures = new QueryService(Model.find({ ...filter, _id: { $in: docIds } }), req.query)
      .paginate(documentCnt)
      .filter()
      .search(modelName)
      .limitFields()
      .sort();

    const { mongooseQuery, paginationResult } = apiFeatures;
    const documents = await mongooseQuery.exec();


    if (!documents) {
      throw new NotFoundError();
    }

    res.status(200).json({ status: 'success', results: documents.length, paginationResult, data: documents });
  };

  const updateMany = async (req: Request, res: Response) => {
    const { filter, update } = req.body;
    const documents = await Model.updateMany(filter, update);
    if (!documents) {
      throw new InternalServerError();
    }
    res.status(200).json({
      status: 'success',
      data: { documents }
    });
  };

  const softDeleteMany = async (req: Request, res: Response) => {
    const { filter } = req.body;
    const documents = await Model.updateMany(filter, { deletedAt: new Date() }, { isDeleted: true });
    if (!documents) {
      throw new InternalServerError();
    }
    res.status(204).send();
  };

  return {
    deleteOne,
    softDeleteOne,
    createOne,
    updateOne,
    getOne,
    getAll,
    getAllByIds,
    softDeleteMany,
    createMany,
    updateMany,
  };
};
