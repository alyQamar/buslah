import { Response } from 'express';
import { ObjectId } from 'mongoose';
import jwt from 'jsonwebtoken';
import { config } from '@config/index';
import Auth from '@auth/auth.model';
import UserModel from '@user/user.model';
import emailServices from '@service/email/emailServices';
import { BadRequestError, IncorrectEmailOrPassError, NotFoundError, SessionDataNotAvailableError, UserNotAuthenticatedError, UserNotAuthenticatedOrTimeExpiredError } from '@global/errorHandler.global';
import { Roles } from './auth.interfaces';

class AuthService {

  private static createToken(userId: ObjectId): string {
    return jwt.sign({ id: userId }, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRE_TIME });
  }

  public static SendTokenViaCookie = (token: string, res: Response): void => {
    if (res && res.req && res.req.session) {
      res.req.session.jwt = token;
    } else {
      throw new SessionDataNotAvailableError();
    }

  };


  public static async signUp(username: string, email: string, password: string, role: Roles): Promise<any> {
    const newAuthDoc = await Auth.create({ username, email, password, role });
    const newUserDoc = await UserModel.create({ authID: newAuthDoc._id, firstName: username });
    await newUserDoc.save();

    const jwtToken = AuthService.createToken(newAuthDoc._id as unknown as ObjectId);
    return { token: jwtToken, data: newAuthDoc };
  }

  public static async login(email: string, password: string): Promise<string> {
    const user = await Auth.findOne({ email }).select('+password');
    if (!user || !(await user.comparePassword(password))) {
      throw new IncorrectEmailOrPassError();
    }

    return AuthService.createToken(user._id as unknown as ObjectId);
  }


  public static async forgotPassword(email: string): Promise<void> {
    const user = await Auth.findOne({ email });
    if (!user) {
      throw new UserNotAuthenticatedError(email);
    }
    const resetCode = user.createPasswordResetCode();
    await user.save({ validateBeforeSave: false });
    emailServices.sendEmail(resetCode.toString(), user.email);
  }

  public static async checkPasswordResetCode(email: string, code: string): Promise<void> {
    const user = await Auth.findOne({ email });
    if (!user) {
      throw new UserNotAuthenticatedError(email);
    }

    if (!user.checkResetPasswordCode(code)) {
      throw new BadRequestError('The code is not verified');
    }
  }

  public static async resetPassword(email: string, newPassword: string): Promise<string> {
    const user = await Auth.findOne({ email, passwordResetExpires: { $gt: Date.now() } });
    if (!user) {
      throw new UserNotAuthenticatedOrTimeExpiredError('email');
    }

    user.password = newPassword;
    user.passwordResetCode = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    return AuthService.createToken(user._id as unknown as ObjectId);
  }
}

export default AuthService;
