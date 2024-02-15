import express, { Router } from 'express';
import { AnswerController } from './answer.controllers';

class AnswerRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/')
      .post(AnswerController.createAnswer).get(AnswerController.getAnswers);

    this.router.route('/:id')
      .get(AnswerController.getAnswer)
      .put(AnswerController.updateAnswer)
      .delete(AnswerController.deleteAnswer);

    return this.router;
  }
}
// Create a new object of this class to export variable direct into your destination 😊
export const answerRoutes: AnswerRoutes = new AnswerRoutes();
