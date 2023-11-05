import { Model, Document } from 'mongoose';
import { Request, Response } from 'express';
import { NotFoundError } from '@global/middlewares/errorMiddleware';
import QueryService from './query.services';

export type commonFunctions<T extends Document> = {
<<<<<<< HEAD
  getOne: (req: Request, res: Response) => Promise<void>,
  createOne: (req: Request, res: Response) => Promise<void>,
  updateOne: (req: Request, res: Response) => Promise<void>,
  deleteOne: (req: Request, res: Response) => Promise<void>
  getAll: (req: Request, res: Response) => Promise<void>
=======
  getOne: (req: Request, res: Response) => Promise<void>;
  createOne: (req: Request, res: Response) => Promise<void>;
  updateOne: (req: Request, res: Response) => Promise<void>;
  deleteOne: (req: Request, res: Response) => Promise<void>;
>>>>>>> 78bdc86a6009de48ff4cb51e40cd3c9988cd7d1e
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
    res.status(201).json({
      status: 'success',
      data: { document }
    });
  };

  const getOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    const document = await Model.findById(id);
    if (!document) {
      throw new NotFoundError(`No document for this id: ${id}`);
    }
    res.status(200).json({
      status: 'success',
      data: { document }
    });
  };

  const getAll = async (req: Request, res: Response) => {

    // [x] Build query (prepare it for the next stage 'execution)
    const documentCnt = await Model.countDocuments();
    const apiFeatures = new QueryService(Model.find(), req.query)
      .paginate(documentCnt)
      .filter()
      .search(modelName)
      .limitFields()
      .sort();

    // [x] Execute query
    const { mongooseQuery, paginationResult } = apiFeatures;
    const documents = await mongooseQuery.exec();
    res
      .status(200)
      .json({ results: documents.length, paginationResult, data: documents });
  };


  return {
    getOne,
    createOne,
    updateOne,
    deleteOne,
    getAll
  };
};
