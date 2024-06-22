import { Request, Response, NextFunction } from 'express';
import { InternalServerError, NotFoundError, BadRequestError } from '@global/errorHandler.global';
import orderModel from '@order/order.model';
import { IOrder, OrderStatus, DurationSolt } from './order.interface';

import { createCommonService, CommonFunctions } from '@service/db/common.service';

const CRUDFunctions: CommonFunctions<IOrder> = createCommonService<IOrder>(orderModel, 'Orders');

export class orderServices {
  public static async createOrder(req: Request, res: Response, next: NextFunction) {
    await CRUDFunctions.createOne(req, res);
  }
}
