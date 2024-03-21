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

    // [x] Public routes
    this.router.get('/mentors', userController.getAllMentors);

    // [x] Protected routes
    this.router.use(AuthController.protect);

    this.router.route('/me')
      .get(userController.getLoggedUserData)
      .put(userController.updateLoggedUserData);
    this.router.put('/password', userController.updateLoggedUserPassword);
    this.router.put('/deactivate', userController.deactivateLoggedUser);

    this.router.delete('/logout', userController.logout);



    // [x] Admin routes
    this.router.use(AuthController.allowedTo(Roles.Admin));

    this.router.get('/', userController.getAllUsers);
    this.router.get('/:id', userController.getUser);

    return this.router;
  }

}

export const userRoutes: UserRoutes = new UserRoutes();
