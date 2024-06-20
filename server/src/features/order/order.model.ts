import { IOrder, OrderStatus, DurationSolt } from './order.interface';
import { model, Model, Schema } from 'mongoose';

const orderSchema: Schema = new Schema<IOrder>({
  orderStatus: OrderStatus,
  orderDate: { type: Date, required: [true, 'Order Date is required'] },
  Duration: DurationSolt,
  mentee: { type: Schema.Types.ObjectId, ref: 'User' },
  mentor: { type: Schema.Types.ObjectId, ref: 'User' }
});

const orderModel: Model<IOrder> = model<IOrder>('Orders', orderSchema);

export default orderModel;
