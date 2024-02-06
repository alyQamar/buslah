import express, { Router } from 'express';
import followsController from '@follows/follows.controllers';


class FollowsRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/')
      .post(followsController.follow)
      .delete(followsController.unFollow)
      .get(followsController.getFollows);

    return this.router;
  }
}

export const followsRoutes: FollowsRoutes = new FollowsRoutes();
