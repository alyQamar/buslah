import { Model, Document } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { RequestValidationError } from '@global/middlewares/errorMiddleware';

class HandlerFactory {
  public async createOne<T extends Document>(Model: Model<T>, req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newDocument = await Model.create(req.body);
      console.log(req.body);
      console.log(newDocument);
      res.status(201).json({ status: 'success', data: newDocument });
    } catch (error) {
      next(new RequestValidationError('did not create the user'));
    }
  }
}

export default HandlerFactory;
