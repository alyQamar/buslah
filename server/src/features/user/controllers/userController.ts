import { Request, Response, NextFunction } from 'express';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import User from '@user/models/userModel';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

class userController {
  public async getUserByID(req: Request, res: Response, next: NextFunction): Promise<void> {
    // TODO create getOne function on the factory then use it here
  }
}

export default userController;
