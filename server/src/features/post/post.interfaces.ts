import mongoose, { Document } from 'mongoose';
import { ICommentDocument } from '@comment/comment.interfaces';
import { IReactionDocument } from '@reaction/reaction.interfaces';
import { PrivacyOptions } from '@auth/auth.interface';


export enum Feelings {
  Happy = 'happy',
  Sad = 'sad',
  Excited = 'excited'
}

interface IPostBase {
  post: string;
  bgColor: string;
  // imgVersion?: string;

  // videoId?: string;
  // videoVersion?: string;
  feelings?: Feelings;
  privacy?: PrivacyOptions;
  shares: number;
  reactions?: IReactionDocument[];
  comments?: ICommentDocument[];
  bookmarksBy: mongoose.Types.ObjectId[] | string[];
}

export interface IPostDocument extends Document, IPostBase {
  _id: mongoose.Types.ObjectId | string;
  parentPost?: mongoose.Types.ObjectId | string;
  prevPost?: mongoose.Types.ObjectId | string;
  user: mongoose.Types.ObjectId | string;
  imgId?: mongoose.Types.ObjectId | string;
}
