import express, { Router } from 'express';
import { PostController } from './post.controllers';

class PostRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/')
      .post(PostController.createPost);

    this.router.route('/:id')
      .get(PostController.getPost);

    return this.router;
  }
}
// Create a new object of this class to export variable direct into your destination 😊
export const postRoutes: PostRoutes = new PostRoutes();
