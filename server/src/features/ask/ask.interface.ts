import mongoose, { Document } from 'mongoose';

export interface IAskDocument extends Document {
  userID: mongoose.Types.ObjectId;
  question: string;
}
