import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { config } from '@config/index';

import AuthModel from '@auth/auth.model';
import UserModel from '@user/user.model';
import emailServices from '@service/email/emailServices';
import {
  BadRequestError, IncorrectEmailOrPassError, InvalidTokenError, MissingTokenError,
  TokenTimeExpiredError, SessionDataNotAvailableError, UnauthorizedError, UserNotAuthenticatedError,
  UserNotAuthenticatedOrTimeExpiredError,
  NotFoundError,
  IncorrectPasswordError
} from '@global/errorHandler.global';
import { IAuthDocument, Roles } from './auth.interface';
import { IUserDocument } from '@user/user.interface';
import { IUserAuthRequest } from '@root/shared/interfaces/request.interface';


class AuthService {

  public static async signUp(username: string, email: string, password: string, role: Roles): Promise<any> {
    const newAuthDoc: IAuthDocument = await AuthModel.create({ username, email, password, role });
    const newUserDoc: IUserDocument = await UserModel.create({ authID: newAuthDoc._id, firstName: username });
    await newUserDoc.save();

    newAuthDoc.user = String(newUserDoc._id);
    await newAuthDoc.save();

    const jwtToken = AuthService.createToken(newAuthDoc._id as unknown as ObjectId);
    return { token: jwtToken, data: newAuthDoc };
  }

  public static async login(email: string, password: string): Promise<string> {
    const userAuth = await AuthModel.findOne({ email }).select('+password');
    if (!userAuth || !(await userAuth.comparePassword(password))) {
      throw new IncorrectEmailOrPassError();
    }

    return AuthService.createToken(userAuth._id as unknown as ObjectId);
  }


  public static async forgotPassword(email: string): Promise<void> {
    const userAuth = await AuthModel.findOne({ email });
    if (!userAuth) {
      throw new UserNotAuthenticatedError(email);
    }
    const resetCode = userAuth.createPasswordResetCode();
    await userAuth.save({ validateBeforeSave: false });
    emailServices.sendEmail(resetCode.toString(), userAuth.email);
  }

  public static async checkPasswordResetCode(email: string, code: string): Promise<void> {
    const userAuth = await AuthModel.findOne({ email });
    if (!userAuth) {
      throw new UserNotAuthenticatedError(email);
    }

    if (!userAuth.checkResetPasswordCode(code)) {
      throw new BadRequestError('The code is not verified');
    }
  }

  public static async resetPassword(email: string, newPassword: string): Promise<string> {
    const userAuth = await AuthModel.findOne({ email, passwordResetExpires: { $gt: Date.now() } });
    if (!userAuth) {
      throw new UserNotAuthenticatedOrTimeExpiredError('email');
    }

    await this.updateUserPassword(userAuth, newPassword);

    return AuthService.createToken(userAuth._id as unknown as ObjectId);
  }

  public static async changePassword(oldPassword: string, newPassword: string, userAuth: IAuthDocument): Promise<void> {
    try {

      userAuth = await this.findUserWithPass(userAuth);

      if (!userAuth) {
        throw new NotFoundError();
      }

      // [x] Check if old password is correct
      await this.validatePassword(userAuth, oldPassword);

      // [x] Update user password based user payload (req.userAuth._id)
      await this.updateUserPassword(userAuth, newPassword);
    } catch (error) {
      throw error;
    }
  }

  public static async isLoggedUser(token: string): Promise<IAuthDocument> {
    // [x] Verify token (check not correct or expired token)
    const decoded = this.verifyToken(token);

    // [x] Check if user exists
    const currentUserAuth = await this.findUser(decoded.id);

    // [x] Check if user changed their password after token creation
    this.checkPasswordChanged(currentUserAuth, decoded.iat);

    return currentUserAuth;
  }

  public static createToken(userId: ObjectId): string {
    return jwt.sign({ id: userId }, config.JWT_SECRET_KEY, { expiresIn: config.JWT_EXPIRE_TIME });
  }

  public static SendTokenViaCookie = (token: string, req: Request, res: Response): void => {
    if (req && req.session) {
      req.session.jwt = token;
    } else {
      throw new SessionDataNotAvailableError();
    }
  };

  public static GetTokenFromCookie = (req: Request): string | undefined => {
    if (req && req.session && req.session.jwt) {
      return req.session.jwt;
    }
    return undefined;
  }

  private static verifyToken(token: string): any {
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET_KEY);
      return decoded;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new TokenTimeExpiredError();
      } else if (error instanceof JsonWebTokenError) {
        throw new InvalidTokenError();
      } else {
        throw error;
      }
    }
  }


  private static async findUser(userAuthId: string): Promise<IAuthDocument> {
    const currentUserAuth = await AuthModel.findById(userAuthId);
    if (!currentUserAuth) {
      throw new UnauthorizedError();
    }
    return currentUserAuth;
  }

  private static async findUserWithPass(userAuth: IAuthDocument) {
    const currentUserAuth = await AuthModel.findById(userAuth._id).select('+password');
    if (!currentUserAuth) {
      throw new UnauthorizedError();
    }
    return currentUserAuth;
  }

  private static async validatePassword(userAuth: IAuthDocument, password: string) {
    const isPasswordCorrect = await userAuth.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new IncorrectPasswordError();
    }
  }

  private static async updateUserPassword(userAuth: IAuthDocument, newPassword: string) {
    userAuth.password = newPassword;
    userAuth.passwordChangedAt = new Date();
    userAuth.passwordResetCode = undefined;
    userAuth.passwordResetExpires = undefined;
    await userAuth.save();
  }

  private static checkPasswordChanged(currentUserAuth: IAuthDocument, iat: number): void {
    if (currentUserAuth.passwordChangedAt) {
      const passChangedTimestamp = Math.floor(currentUserAuth.passwordChangedAt.getTime() / 1000);

      // Password changed after token creation (Error)
      if (passChangedTimestamp > iat) {
        throw new UnauthorizedError();
      }
    }
  }

}

export default AuthService;
