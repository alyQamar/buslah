import express, { NextFunction, Router } from 'express';
import authController from '@auth/controllers/authController';

const controller = new authController();

class authRouter {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.router.post('/sign-up', controller.SignUp);
  }

  routes(): Router {
    return this.router;
  }
}

export default authRouter;
