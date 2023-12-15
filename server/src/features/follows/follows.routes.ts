import express, { Router } from 'express';
import followsController from '@follows/follows.controllers';

const controller = followsController;

class followsRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
    this.router.post('/follow', controller.follow);
    this.router.delete('/unfollow', controller.unfollow);
  }

  routes(): Router {
    return this.router;
  }
}

export const FollowsRoutes: followsRoutes = new followsRoutes();
