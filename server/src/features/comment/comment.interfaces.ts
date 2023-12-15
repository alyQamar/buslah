import mongoose, { Document } from 'mongoose';
import { IReactionDocument } from '@reaction/reaction.interfaces';

interface ICommentBase {
  comment: string;
  reactions?: IReactionDocument[];
}

export interface ICommentDocument extends Document, ICommentBase {
  _id: mongoose.Types.ObjectId | string;
  parentComment?: mongoose.Types.ObjectId | string;
  post: mongoose.Types.ObjectId | string;
  user: mongoose.Types.ObjectId | string;
}
