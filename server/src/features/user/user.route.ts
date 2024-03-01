import express, { NextFunction, Router } from 'express';
import userController from '@user/user.controller';
import AuthController from '@auth/auth.controller';
import { Roles } from '@auth/auth.interface';


class UserRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {

    // Public routes
    this.router.get('/mentors', userController.getAllMentors);

    // Protected routes
    this.router.use(AuthController.protect);

    this.router.get('/getMe', userController.getLoggedUserData);
    this.router.put('/changeMyPassword', userController.updateLoggedUserPassword);
    this.router.put('/updateMe', userController.updateLoggedUserData);
    this.router.put('/deactivateMe', userController.deactivateLoggedUser);
    this.router.put('/logout', userController.logout);



    // Admin
    this.router.use(AuthController.allowedTo(Roles.Admin));

    this.router.get('/', userController.getAllUsers);
    this.router.get('/:id', userController.getUser);

    return this.router;
  }

}

export const userRoutes: UserRoutes = new UserRoutes();
