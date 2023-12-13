import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
import { ICommentDocument } from '@comment/comment.interfaces';
// import { IReactionsDocument } from '@reactions/reactions.interfaces';

export enum PrivacyOptions {
  Public = 'public',
  Private = 'private',
  Followers = 'followers',
}

export enum Feelings {
  Happy = 'happy',
  Sad = 'sad',
  Excited = 'excited',
}


interface IPostBase {
  content: string;
  bgColor: string;
  feelings?: Feelings;
  // imgVersion?: string;
  // imgId?: string;
  // videoId?: string;
  // videoVersion?: string;
  privacy?: PrivacyOptions;
  shares: number;
  // reactions?: IReactionsDocument[];
  comments?: ICommentDocument[];
}

export interface IPostDocument extends Document, IPostBase {
  _id: ObjectId;
  parentPost?: ObjectId;
  prevPost?: ObjectId;
  user: ObjectId;
}
