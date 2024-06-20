import { Document } from 'mongoose';

// Enum for defining user roles
export enum OrderStatus {
  Awaiting_payment = 'Awaiting Payment',
  Awaiting_Approval = 'Awaiting Approval',
  Completed = 'Completed',
  Canceled = 'Canceled'
}

export enum DurationSolt {
  Fifteen_minutes = 15,
  Thirty_minutes = 30,
  One_Hour = 60
}

export interface IOrder extends Document {
  orderStatus: OrderStatus;
  orderDate: Date;
  Duration: DurationSolt;
}
