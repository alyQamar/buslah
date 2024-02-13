import express, { Router } from 'express';
import { ReviewController } from './review.controller';
import { ReviewService } from './review.service';

class ReviewRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/')
      .post(ReviewController.createReview).get(ReviewService.createFilterObj, ReviewController.getReviews);

    this.router.route('/:id')
      .get(ReviewController.getReview)
      .put(ReviewController.updateReview)
      .delete(ReviewController.deleteReview);

    return this.router;
  }
}
// Create a new object of this class to export variable direct into your destination 😊
export const reviewRoutes: ReviewRoutes = new ReviewRoutes();
