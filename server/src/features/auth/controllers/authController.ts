import { Model, ObjectId } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import { signupValidator } from '@auth/validators/signupValidator';
import Auth, { IAuthDocument } from '@auth/models/Auth';
import { string } from 'joi';

class authController {
  public static createToken = (userId: ObjectId): string => {
    const token = jwt.sign({ id: userId }, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRE_TIME });
    return token;
  };

  public static SendTokenViaCookie = (token: string, res: Response): void => {
    const expiredTime: number = Number(config.JWT_COOKIE_EXPIRE_IN);
    const cookiesOptions = {
      expires: new Date(Date.now() + expiredTime * 24 * 60 * 60 * 1000),
      secure: false,
      httpOnly: true // this make the browser able to receiveand send cookies only not access it
    };
    if (process.env.NODE_ENV === 'production') {
      cookiesOptions.secure = true; // this for sending the cookie in encrypted connection (https)
    }
    res.cookie('jwt', token, cookiesOptions);
  };

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

      // generate a JWT token & send it via cookie
      const id = newDoc._id as unknown as ObjectId;
      const jwtToken = authController.createToken(id);
      authController.SendTokenViaCookie(jwtToken, res);

      // Sending a response with the newly created document and the JWT token
      res.status(201).json({ status: 'success', token: jwtToken, data: newDoc });
    } catch (error) {
      // Handling any potential errors
      console.error('Error creating user:', error);
      res.status(500).json({ status: 'error', message: 'Internal server error' });
    }
  }

  public async LogIn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      // 1) Check if email and password exist
      if (!email || !password) {
        return next(new Error('Please provide email and password!'));
      }

      // 2) Check if user exists && password is correct
      const user = await Auth.findOne({ email }).select('+password'); //the + herer because we want to select a field it is not selected

      if (!user || !(await user.comparePassword(password))) {
        return next(new Error('Incorrect email or password'));
      }

      // 3) If everything ok, send token to client

      const id = user._id as unknown as ObjectId;
      const jwtToken = authController.createToken(id);
      authController.SendTokenViaCookie(jwtToken, res);
      res.status(200).json({ status: 'success', jwtToken });
    } catch (error) {
      // Handling any potential errors
    }
  }
}

export default authController;
