import express, { Router } from 'express';
import { orderController } from '@order/order.controller';

class OrderRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/').post(orderController.createOrder);
    this.router.route('/:id').put(orderController.updateOrder);

    return this.router;
  }
}

export const orderRoutes: OrderRoutes = new OrderRoutes();
