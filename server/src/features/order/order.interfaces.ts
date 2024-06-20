import mongoose, { Document } from 'mongoose';

// Enum for defining user roles
export enum OrderStatus {
  Awaiting_payment = 'Awaiting Payment',
  Awaiting_Approval = 'Awaiting Approval',
  Completed = 'Completed',
  Canceled = 'Canceled'
}

export interface IOrder extends Document {
  orderStatus: OrderStatus;
  RegistryDate?: Date;
}
