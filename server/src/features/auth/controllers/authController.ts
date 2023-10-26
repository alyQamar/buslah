import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { validate } from '@global/middlewares/validationMiddleware';
import { signupValidator } from '@auth/validators/signupValidator';
import Auth, { IAuthDocument } from '@auth/models/Auth';
import { string } from 'joi';
dotenv.config({ path: '.env' });

class authController {
  // public createToken(userId: string): string {
  //   const token = jwt.sign({ id: userId }, 'R3Fkw7mD2Lp6eP@!5EA-368&7843?5Eq', { expiresIn: process.env.JWT_EXPIRE_TIME });
  //   return token;
  // }

  @validate(signupValidator)
  public async SignUp(req: Request, res: Response, next: NextFunction): Promise<void> {
    // handler.createOne(Auth as Model<IAuthDocument>, req, res, next);
    try {
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      };

      // Creating a new document using the Auth model
      const newDoc = await Auth.create(data);

      // Call the `createToken()` method to generate a JWT token
      const jwtToken = jwt.sign({ id: newDoc._id }, 'R3Fkw7mD2Lp6eP@!5EA-368&7843?5Eq', { expiresIn: process.env.JWT_EXPIRE_TIME });

      // Sending a response with the newly created document and the JWT token
      res.status(201).json({ status: 'success', token: jwtToken, data: newDoc });
    } catch (error) {
      // Handling any potential errors
      console.error('Error creating user:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  }
}

export default authController;
