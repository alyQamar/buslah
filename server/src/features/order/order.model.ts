import { IOrder, OrderStatus, DurationSolt } from './order.interface';
import { model, Model, Schema, SchemaTypeOptions } from 'mongoose';

const orderSchema: Schema = new Schema<IOrder>({
  orderStatus: {
    type: String,
    enum: OrderStatus,
    required: true,
    default: OrderStatus.Awaiting_Approval
  },
  orderDate: { type: Date, required: [true, 'Order Date is required'] },
  Duration: {
    type: String,
    enum: DurationSolt,
    required: true
  },
  mentee: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  mentor: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

const orderModel: Model<IOrder> = model<IOrder>('Orders', orderSchema);

export default orderModel;
