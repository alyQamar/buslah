import { Request, Response, NextFunction } from 'express';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import userModel from '@user/models/userModel';
import { IUserDocument } from '@user/interfaces/userInterface';
import { createCommonService, commonFunctions } from '@service/db/common.services';
import { NotFoundError } from '@global/middlewares/errorMiddleware';

const CRUDFunctions: commonFunctions<IUserDocument> = createCommonService<IUserDocument>(userModel);

class userController {
  public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the user.');
    }
  }
}

export default userController;
