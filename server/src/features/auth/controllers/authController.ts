import { Model } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import { signupValidator } from '@auth/validators/signupValidator';
import Auth, { IAuthDocument } from '@auth/models/Auth';
import { string } from 'joi';

class authController {
  // public createToken(userId: string): string {
  //   const token = jwt.sign({ id: userId }, 'R3Fkw7mD2Lp6eP@!5EA-368&7843?5Eq', { expiresIn: process.env.JWT_EXPIRE_TIME });
  //   return token;
  // }

  @validate(signupValidator)
  public async SignUp(req: Request, res: Response, next: NextFunction): Promise<void> {
    // handler.createOne(Auth as Model<IAuthDocument>, req, res, next);
    try {
      // first we need to check if this user already exists
      const existingUser = await Auth.findOne({ email: req.body.email });

      if (existingUser) {
        res.status(409).json({ error: 'User already exist', message: 'The requested user already exists in the system.' });
      }

      // if it doesn't exist extract the information from the body
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword
      };

      // Creating a new document using the Auth model
      const newDoc = await Auth.create(data);

      // Call the `createToken()` method to generate a JWT token
      const jwtToken = jwt.sign({ id: newDoc._id }, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRE_TIME });

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
