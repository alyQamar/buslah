import { Request, Response, NextFunction } from 'express';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import userModel from '@user/models/userModel';
import { IUserDocument } from '@user/interfaces/userInterface';
import { createCommonService, CommonFunctions } from '@service/db/common.services';
import { NotFoundError } from '@global/middlewares/errorMiddleware';

const CRUDFunctions: CommonFunctions<IUserDocument> = createCommonService<IUserDocument>(userModel, 'Users');

class userController {
  public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the user.');
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the user.');
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the user.');
    }
  }

  public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find any users.');
    }
  }
}

export default userController;
