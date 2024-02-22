import { Request, Response, NextFunction } from 'express';

import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { InternalServerError } from '@global/errorHandler.global';

import AuthService from './auth.service';
import {
  LoginValidator,
  checkPasswordResetCodeValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
  signupValidator
} from '@auth/auth.validators';
import { checkExists, checkNotExists } from '@root/shared/decorators/customValidation.decorator';
import AuthModel from './auth.model';

class AuthController {

  @checkNotExists(AuthModel, 'email')
  @validateBody(signupValidator)
  public static async signUp(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const newUser = await AuthService.signUp(req.body.username, req.body.email, req.body.password);
      AuthService.SendTokenViaCookie(newUser.token, res);
      res.status(201).json({ status: 'success', data: newUser });
    } catch (error) {
      next(error);
    }
  }

  @validateBody(LoginValidator)
  public static async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const jwtToken = await AuthService.login(req.body.email, req.body.password);
      AuthService.SendTokenViaCookie(jwtToken, res);
      res.status(200).json({ status: 'success', jwtToken });
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
      AuthService.SendTokenViaCookie(jwtToken, res);
      res.status(200).json({ message: 'success', jwtToken });
    } catch (error) {
      next(error);
    }
  }
}

export default AuthController;