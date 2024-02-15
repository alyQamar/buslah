import mongoose, { Document } from 'mongoose';

export interface IFeedbackDocument extends Document {
  sender: mongoose.Types.ObjectId | string;
  receiver: mongoose.Types.ObjectId | string;
  session: mongoose.Types.ObjectId | string;
  rating: number;
  feedback?: string;
  createdAt: Date;
}
