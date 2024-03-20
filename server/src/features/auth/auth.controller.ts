import { Request, Response, NextFunction } from 'express';

import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { ForbiddenError, InternalServerError, MissingTokenError, UnauthorizedError } from '@global/errorHandler.global';

import AuthService from './auth.service';
import {
  LoginValidator,
  checkPasswordResetCodeValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  signupValidator
} from '@auth/auth.validator';
import { checkExists, checkNotExists } from '@root/shared/decorators/customValidation.decorator';
import AuthModel from './auth.model';
import { Roles } from './auth.interface';
import { IUserAuthRequest } from '@root/shared/interfaces/request.interface';

class AuthController {

  @checkNotExists(AuthModel, 'email')
  @validateBody(signupValidator)
  public static async signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { username, email, password, role } = req.body;
      const newUser = await AuthService.signUp(username, email, password, role);

      AuthService.SendTokenViaCookie(newUser.token, req, res);

      res.status(201).json({ status: 'success', data: newUser.data, token: newUser.token });
    } catch (error) {
      next(error);
    }
  }

  @validateBody(LoginValidator)
  public static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const jwtToken = await AuthService.login(req.body.email, req.body.password);
      AuthService.SendTokenViaCookie(jwtToken, req, res);
      res.status(200).json({ status: 'success', token: jwtToken });
    } catch (error) {
      next(error);
    }
  }

  @validateBody(forgotPasswordValidator)
  public static async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await AuthService.forgotPassword(req.body.email);
      res.status(200).json({ message: 'Password reset code sent successfully.' });
    } catch (error) {
      next(error);
    }
  }

  @validateBody(checkPasswordResetCodeValidator)
  public static async checkPasswordResetCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await AuthService.checkPasswordResetCode(req.body.userEmail, req.body.code);
      res.status(200).json({ message: 'success' });
    } catch (error) {
      next(error);
    }
  }

  @validateBody(resetPasswordValidator)
  public static async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const jwtToken = await AuthService.resetPassword(req.body.email, req.body.password);
      AuthService.SendTokenViaCookie(jwtToken, req, res);
      res.status(200).json({ message: 'success', jwtToken });
    } catch (error) {
      next(error);
    }
  }

  /**
   *
   * @param req Request
   * @param res Response
   * @param next Function called when the request is successful and the response is returned and call next function or middleware
   * @desc  Pre feature controller middleware make sure the user is logged in and token validation is enabled
   */
  public static async protect(req: IUserAuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = AuthService.GetTokenFromCookie(req);
      console.log(token);
      if (!token) {
        throw new MissingTokenError();
      }
      req.userAuth = await AuthService.isLoggedUser(token);
      next();
    } catch (error) {
      next(error);
    }
  }

  /**
   *
   * @param roles user roles
   * @desc  Pre feature controller middleware make sure the user role is allowed to access the controller route
   */
  public static allowedTo(...roles: Roles[]): (req: Request, res: Response, next: NextFunction) => Promise<void> {
    return async (req: IUserAuthRequest, res: Response, next: NextFunction): Promise<void> => {
      try {
        if (!roles.includes(req.userAuth.role)) {
          throw new ForbiddenError();
        }
        next();
      } catch (error) {
        next(error);
      }
    };
  }


}

export default AuthController;
