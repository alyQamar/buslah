import express, { Router } from 'express';
import { mediaController } from './media.controllers';

class MediaRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.post('/uploadImage/:Id/:type', mediaController.uploadMiddleware.single('image'), mediaController.uploadPhoto);

    // this.router.route('/images/:id')

    // this.router.route('/videos')

    // this.router.route('/videos/:id')

    return this.router;
  }
}
// Create a new object of this class to export variable direct into your destination 😊
export const mediaRoutes: MediaRoutes = new MediaRoutes();
