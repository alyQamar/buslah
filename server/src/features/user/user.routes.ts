import express, { NextFunction, Router } from 'express';
import userController from '@user/user.controllers';

const controller = new userController();

class UserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.routes();
  }
  public routes(): Router {
    this.router.get('/', controller.getAllUsers);
    this.router.get('/mentors', controller.getAllMentors);

    this.router.route('/:id')
      .get(controller.getUser)
      .put(controller.updateLoggedUserData)
      .delete(controller.deleteUser);

    return this.router;
  }

}

export const userRoutes: UserRoutes = new UserRoutes();
