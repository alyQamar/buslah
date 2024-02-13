import { Request, Response, NextFunction } from 'express';
import { config } from '@config/index';
import { validateBody } from '@root/shared/decrators/joiValidation.decorator';
import userModel from '@user/user.model';
import { IUserDocument } from '@user/user.interfaces';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { NotFoundError } from '@global/errorHandler.global';

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
