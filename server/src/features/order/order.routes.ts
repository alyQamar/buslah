import express, { Router } from 'express';
import { orderController } from '@order/order.controller';

class OrderRoutes {
  private router: Router;

  constructor() {
    this.router = express.Router();
  }

  public routes(): Router {
    this.router.route('/newOrder').post(orderController.createOrder);
    this.router.route('/updateOrder/:id').put(orderController.updateOrder);

    return this.router;
  }
}

export const orderRoutes: OrderRoutes = new OrderRoutes();
