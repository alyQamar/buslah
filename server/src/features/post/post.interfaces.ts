import mongoose, { Document } from 'mongoose';

export interface IPostDocument extends Document {
  _id?: string | mongoose.Types.ObjectId;
  post: string;
  bgColor: string;
  createdAt: Date;
  authorID: {
    type: string | mongoose.Types.ObjectId;
    ref: 'user';
  };
  reactions: {
    type: string | mongoose.Types.ObjectId;
    ref: 'reaction';
  };
}
