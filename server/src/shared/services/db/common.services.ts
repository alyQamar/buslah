import { Model, Document } from 'mongoose';
import { Request, Response } from 'express';
import { NotFoundError } from '@global/middlewares/errorMiddleware';

export type commonFunctions<T extends Document> = {
  getOne: (req: Request, res: Response) => Promise<void>;
  createOne: (req: Request, res: Response) => Promise<void>;
  updateOne: (req: Request, res: Response) => Promise<void>;
  deleteOne: (req: Request, res: Response) => Promise<void>;
};

export const createCommonService = <T extends Document>(Model: Model<T>): commonFunctions<T> => {
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

  return {
    getOne,
    createOne,
    updateOne,
    deleteOne
  };
};
