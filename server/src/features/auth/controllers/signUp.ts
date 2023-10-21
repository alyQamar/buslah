import { ObjectId } from 'mongodb';
import { Request, Response } from 'express';
import { validate } from '@global/middlewares/validationMiddleware';
import { signupValidator } from '@auth/validators/signupValidator';
export class SignUp {
  @validate(signupValidator)
  public async create(req: Request, res: Response): Promise<void> {

  }
}
