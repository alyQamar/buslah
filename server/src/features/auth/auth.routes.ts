import express, { NextFunction, Router } from 'express';
import authController from '@auth/auth.controller';


class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  routes(): Router {
    this.router.post('/signUp', authController.signUp);
    this.router.post('/login', authController.login);
    this.router.post('/forgotPassword', authController.forgotPassword);
    this.router.post('/checkCode', authController.checkPasswordResetCode);
    this.router.post('/resetPassword', authController.resetPassword);
    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
