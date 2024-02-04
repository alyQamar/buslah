import { ObjectId } from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import {
  LoginValidator,
  checkPasswordResetCodeValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  signupValidator
} from '@auth/auth.validators';
import Auth from '@auth/auth.model';
import emailServices from '@service/email/emailServices';
import { InternalServerError, NotFoundError, BadRequestError } from '@global/middlewares/errorMiddleware';
import UserModel from '@user/user.model';
import followsModel from '@follows/follows.model';

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
  public static async signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
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
        password: req.body.password
      };

      // Creating a new document using the Auth model
      const newDoc = await Auth.create(data);

      // Creating a new user document using User model, sending Auth id with it
      const newUser = await UserModel.create({
        authID: newDoc._id,
        firstName: data.name
      });

      // Creating a new follos document
      const followDoc = await followsModel.create({});
      newUser.followsID = followDoc._id;
      await newUser.save();

      // generate a JWT token & send it via cookie
      const id = newDoc._id as unknown as ObjectId;
      const jwtToken = authController.createToken(id);
      authController.SendTokenViaCookie(jwtToken, res);

      // Sending a response with the newly created document and the JWT token
      res.status(201).json({ status: 'success', token: jwtToken, data: newDoc });
    } catch (error) {
      return next(new InternalServerError('Internal Server error'));
    }
  }

  @validate(LoginValidator)
  public static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      // Check if user exists && password is correct
      const user = await Auth.findOne({ email }).select('+password'); //the + herer because we want to select a field it is not selected

      if (!user || !(await user.comparePassword(password))) {
        return next(new BadRequestError('Incorrect email or password'));
      }

      //  If everything ok, send token to client

      const id = user._id as unknown as ObjectId;
      const jwtToken = authController.createToken(id);
      authController.SendTokenViaCookie(jwtToken, res);
      res.status(200).json({ status: 'success', jwtToken });
    } catch (error) {
      return next(new InternalServerError('Internal Server Error.'));
    }
  }

  @validate(forgotPasswordValidator)
  public static async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // 1) Get user based on POSTed email
      const userEmail = req.body.email;
      const user = await Auth.findOne({ email: userEmail });

      if (!user) {
        // If no user is found, return an error response to the client.
        return next(new NotFoundError('User not found.'));
      }

      // 2) Generate the random reset token
      const resetCode = user.createPasswordResetCode();
      // Save the user with the new password reset token without running validation.
      await user.save({ validateBeforeSave: false });

      emailServices.sendEmail(resetCode, user.email);

      // 3) Respond to the client to indicate that the reset token has been sent.
      res.status(200).json({ message: 'Password reset code sent successfully.' });
    } catch (error) {
      next(new InternalServerError('Internal Server Error'));
    }
  }

  @validate(checkPasswordResetCodeValidator)
  public static async checkPasswordResetCode(req: Request, res: Response, next: NextFunction): Promise<void> {
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
        res.status(200).json({ message: 'success' }); // No need for a response body
      } else {
        res.status(403).json({ message: 'The code is not verified' });
      }
    } catch (error) {
      return next(new InternalServerError('Internal Server Error'));
    }
  }

  @validate(resetPasswordValidator)
  public static async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
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
