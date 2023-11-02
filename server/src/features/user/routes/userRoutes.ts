import express, { NextFunction, Router } from 'express';
import userController from '@user/controllers/userController';

const controller = new userController();

class UserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/:id', controller.getUserByID);
  }

  routes(): Router {
    return this.router;
  }
}

export const userRoutes: UserRoutes = new UserRoutes();
