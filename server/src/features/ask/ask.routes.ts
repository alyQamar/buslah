import express, { Router } from 'express';
import askController from '@ask/ask.controllers';

const controller = new askController();

class AskRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  routes(): Router {
    this.router.route('/').get(controller.getAllAsks).post(controller.createAsk);
    this.router.route('/:id').get(controller.getAsk).put(controller.updateAsk).delete(controller.deleteAsk);

    return this.router;
  }
}

export const askRoutes: AskRoutes = new AskRoutes();
