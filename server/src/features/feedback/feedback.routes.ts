import express, { Router } from 'express';
import feedbackController from '@feedback/feedback.controllers';

const controller = new feedbackController();

class FeedbackRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  routes(): Router {
    this.router.route('/').get(controller.getAllFeedbacks).post(controller.createFeedback);
    this.router.route('/:id').get(controller.getFeedback).patch(controller.updateFeedback).delete(controller.deleteFeedback);

    return this.router;
  }
}

export const feedbackRoutes: FeedbackRoutes = new FeedbackRoutes();
