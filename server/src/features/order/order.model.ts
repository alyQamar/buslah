import { IOrder, OrderStatus, DurationSolt } from './order.interfaces';
import { model, Model, Schema } from 'mongoose';

const orderSchema: Schema = new Schema<IOrder>({
  orderStatus: OrderStatus,
  orderDate: { type: Date, required: [true, 'Order Date is required'] },
  Duration: DurationSolt
});

const orderModel: Model<IOrder> = model<IOrder>('Orders', orderSchema);

export default orderModel;
