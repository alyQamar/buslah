import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import { config } from '@config/index';
import Auth from '@auth/auth.model';
import UserModel from '@user/user.model';
import emailServices from '@service/email/emailServices';
import {
  BadRequestError, IncorrectEmailOrPassError, InvalidTokenError, MissingTokenError,
  TokenTimeExpiredError, SessionDataNotAvailableError, UnauthorizedError, UserNotAuthenticatedError,
  UserNotAuthenticatedOrTimeExpiredError
} from '@global/errorHandler.global';
import { IAuthDocument, Roles } from './auth.interface';
import { IUserDocument } from '@user/user.interfaces';
import AuthModel from '@auth/auth.model';


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
    const newAuthDoc: IAuthDocument = await Auth.create({ username, email, password, role });
    const newUserDoc: IUserDocument = await UserModel.create({ authID: newAuthDoc._id, firstName: username });
    await newUserDoc.save();

    newAuthDoc.user = String(newUserDoc._id);
    await newAuthDoc.save();

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


  public static async isLoggedUser(auth: (string | undefined)): Promise<IAuthDocument> {
    // [x] Check if token exists and get it
    const token = this.tokenExists(auth);

    // [x] Verify token (check not correct or expired token)
    const decoded = this.verifyToken(token);

    // [x] Check if user exists
    const currentUserAuth = await this.findUser(decoded.userId);

    // [x] Check if user changed their password after token creation
    this.checkPasswordChanged(currentUserAuth, decoded.iat);

    return currentUserAuth;
  }


  private static isToken(auth: string | undefined): boolean {
    return !!auth && auth.startsWith("Bearer");
  }

  private static getToken(auth: string | undefined): string | undefined {
    if (this.isToken(auth)) {
      return auth?.split(' ')[1];
    }
    return undefined;
  }

  private static tokenExists(auth: string | undefined): string {
    const token = this.getToken(auth);
    if (!token) {
      throw new MissingTokenError();
    }
    return token;
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


  private static async findUser(userId: string): Promise<IAuthDocument> {
    const currentUserAuth = await AuthModel.findOne({ user: userId });
    if (!currentUserAuth) {
      throw new UnauthorizedError();
    }
    return currentUserAuth;
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
