import express, { Router } from 'express';
import { Roles } from '@auth/auth.interface';
import feedController from './feed.controller';
import AuthController from '@auth/auth.controller';

class FeedRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/')
      .get(AuthController.protect, feedController.getFeed, feedController.getFeed);


    return this.router;
  }
}
// Create a new object of this class to export variable direct into your destination 😊
export const feedRoutes: FeedRoutes = new FeedRoutes();
