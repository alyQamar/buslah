import { Document, Schema } from 'mongoose';

// Enum for defining user roles
export enum OrderStatus {
  Awaiting_Approval = 'Awaiting Approval',
  Completed = 'Completed',
  Canceled = 'Canceled',
  Rescheduled = 'Rescheduled'
}

export enum DurationSolt {
  Fifteen_minutes = 'Fifteen Minutes',
  Thirty_minutes = 'Thirty Minutes',
  One_Hour = ' One Hour'
}

export interface IOrder extends Document {
  orderStatus: OrderStatus;
  orderDate: Date;
  Duration: DurationSolt;
  mentor: {
    type: typeof Schema.Types.ObjectId;
    ref: string;
  };
  mentee: {
    type: typeof Schema.Types.ObjectId;
    ref: string;
  };
}
