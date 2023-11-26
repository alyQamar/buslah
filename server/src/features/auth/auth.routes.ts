import express, { NextFunction, Router } from 'express';
import authController from '@auth/auth.controllers';

const controller = new authController();

class AuthRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.router.post('/sign-up', controller.SignUp);
    this.router.post('/log-in', controller.LogIn);
    this.router.post('/forgot-password', controller.forgotPassword);
    this.router.post('/check-code', controller.checkPasswordResetCode);
  }

  routes(): Router {
    return this.router;
  }
}

export const authRoutes: AuthRoutes = new AuthRoutes();
