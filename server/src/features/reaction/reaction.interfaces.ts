import mongoose, { Document } from 'mongoose';

export interface IReactionDocument extends Document {
  userID: mongoose.Types.ObjectId;
  onPost: boolean;
  postID: mongoose.Types.ObjectId;
  commentID: mongoose.Types.ObjectId;
  reaction: string;
}
