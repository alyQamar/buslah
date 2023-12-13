import mongoose, { Document } from 'mongoose';

export interface IReactionDocument extends Document {
  userID: mongoose.Types.ObjectId;
  postID: mongoose.Types.ObjectId;
  reaction: string;
}
