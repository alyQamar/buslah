import { Model, ObjectId } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import { checkPasswordResetCodeValidator, resetPasswordValidator, signupValidator } from '@auth/auth.validators';
import Auth, { IAuthDocument } from '@auth/auth.model';
import { string } from 'joi';
import emailServices from '@service/email/emailServices';
import { InternalServerError, NotFoundError } from '@global/middlewares/errorMiddleware';

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

  public async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // 1) Get user based on POSTed email
      const user = await Auth.findOne({ email: req.body.email });

      if (!user) {
        // If no user is found, return an error response to the client.
        return next(res.status(404).json({ error: 'User not found.' }));
      }

      // 2) Generate the random reset token
      const resetCode = user.createPasswordResetToken();
      // Save the user with the new password reset token without running validation.
      await user.save({ validateBeforeSave: false });

      emailServices.sendEmail(resetCode, user.email);

      // 3) Respond to the client to indicate that the reset token has been sent.
      res.status(200).json({ message: 'Password reset code sent successfully.' });
    } catch (error) {
      // Handle any unexpected errors by passing them to the error-handling middleware.
      next(error);
    }
  }

  @validate(checkPasswordResetCodeValidator)
  public async checkPasswordResetCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { userEmail, code } = req.body;

      // Check if the user exists
      const user = await Auth.findOne({ email: userEmail });

      if (!user) {
        // If no user is found, return an error response to the client.
        return next(new NotFoundError('User not found.'));
      }

      const isVerified = user.checkResetPasswordCode(code + '');

      if (isVerified) {
        res.status(204).end(); // No need for a response body
      } else {
        res.status(403).json({ message: 'The code is not verified' });
      }
    } catch (error) {
      return next(new InternalServerError('Internal Server Error'));
    }
  }

  @validate(resetPasswordValidator)
  public async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // 1) Get user based on the token
      const userEmail = req.body.email;
      const user = await Auth.findOne({
        email: userEmail,
        passwordResetExpires: { $gt: Date.now() }
      });

      if (!user) {
        return next(new NotFoundError("User not found or the verification code's time has expired. Please try again."));
      } else {
        user.password = req.body.password;
        user.passwordResetCode = undefined;
        user.passwordResetExpires = undefined;
        await user.save();

        // 3) If everything ok, send token to client

        const id = user._id as unknown as ObjectId;
        const jwtToken = authController.createToken(id);
        authController.SendTokenViaCookie(jwtToken, res);
        res.status(200).json({ message: 'Password successfully reset.', jwtToken });
      }
    } catch (error) {
      return next(new InternalServerError('Internal Server Error'));
    }
  }
}
export default authController;
