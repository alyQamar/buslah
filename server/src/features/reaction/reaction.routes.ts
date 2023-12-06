import express, { NextFunction, Router } from 'express';
import reactionController from '@reaction/reaction.controllers';

const controller = new reactionController();

class ReactionRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  routes(): Router {
    this.router.route('/').get(controller.getAllReactions).post(controller.createReaction);
    this.router.route('/:id').get(controller.getReaction).put(controller.updateReaction).delete(controller.deleteReaction);

    return this.router;
  }
}

export const reactionRoutes: ReactionRoutes = new ReactionRoutes();
