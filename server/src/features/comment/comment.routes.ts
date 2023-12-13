import express, { Router } from 'express';
import { CommentController } from './comment.controllers';

class CommentRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/')
      .post(CommentController.createComment).get(CommentController.getComments);

    this.router.route('/:id')
      .get(CommentController.getComment)
      .put(CommentController.updateComment)
      .delete(CommentController.deleteComment);

    return this.router;
  }
}
// Create a new object of this class to export variable direct into your destination 😊
export const commentRoutes: CommentRoutes = new CommentRoutes();
