import { Request, Response, NextFunction } from 'express';
import { InternalServerError, NotFoundError, BadRequestError } from '@global/errorHandler.global';
import userModel from '@user/user.model';
import orderModel from '@order/order.model';
import { orderServices } from '@order/order.service';

export class orderController {
  public static async createOrder(req: Request, res: Response, next: NextFunction) {
    await orderServices.createOrder(req, res, next);
  }
}
