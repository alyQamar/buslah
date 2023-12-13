import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
// import { IReactionsDocument } from '@reactions/reactions.interfaces';

interface ICommentBase {
  content: string;
  // reactions: IReactionsDocument[];
}

export interface ICommentDocument extends Document, ICommentBase {
  _id: ObjectId;
  parentComment?: ObjectId;
  post: ObjectId;
  user: ObjectId;
}
