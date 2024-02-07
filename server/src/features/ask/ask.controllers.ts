import { Request, Response, NextFunction } from 'express';
import { askModel } from '@ask/ask.model';
import { IAskDocument } from '@ask/ask.interface';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { BadRequestError, NotFoundError } from '@global/middlewares/errorMiddleware';

const CRUDFunctions: CommonFunctions<IAskDocument> = createCommonService<IAskDocument>(askModel, 'Asks');

class askController {
  public async createAsk(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.body.userID) throw new Error('You can not create an Ask without a user ID');
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      return next(new BadRequestError(`${error}`));
    }
  }
  public async getAsk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the ask.'));
    }
  }
  public async deleteAsk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the ask.'));
    }
  }
  public async updateAsk(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the ask.'));
    }
  }
  public async getAllAsks(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find any ask.'));
    }
  }
}

export default askController;
