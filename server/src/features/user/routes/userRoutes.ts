import express, { NextFunction, Router } from 'express';
import userController from '@user/controllers/userController';

const controller = new userController();

class UserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.router.get('/', controller.getAllUsers);
    this.router.get('/:id', controller.getUser);
    this.router.delete('/:id', controller.deleteUser);
    this.router.put('/:id', controller.updateUser);
  }

  routes(): Router {
    return this.router;
  }
}

export const userRoutes: UserRoutes = new UserRoutes();
