import mongoose, { Document } from 'mongoose';

export interface IReactionDocument extends Document {
  user: mongoose.Types.ObjectId;
  onPost: boolean;
  post?: mongoose.Types.ObjectId;
  comment?: mongoose.Types.ObjectId;
  reaction: string;
}
