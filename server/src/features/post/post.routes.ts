import express, { Router } from 'express';
import { PostController } from './post.controllers';
import authController from '@auth/auth.controller';
import { Roles } from '@auth/auth.interfaces';

class PostRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/')
      .post(authController.protect, authController.allowedTo(Roles.Mentor), PostController.createPost).get(PostController.getPosts);

    this.router.route('/:id')
      .get(PostController.getPost)
      .put(PostController.updatePost)
      .delete(PostController.deletePost);

    return this.router;
  }
}
// Create a new object of this class to export variable direct into your destination 😊
export const postRoutes: PostRoutes = new PostRoutes();
