import mongoose, { Document } from 'mongoose';

import { PrivacyOptions } from '@auth/auth.interfaces';
import { IAnswerDocument } from '@answer/answer.interfaces';


export enum Feelings {
  Bug = 'bug',
  Confused = 'confused',
  Stuck = 'stuck',
  Anxious = 'anxious',
  Motivated = 'motivated',
}

export interface IAskBase extends Document {
  question: string;
  helpfulUsers: mongoose.Types.ObjectId[] | string[];
  unhelpfulUsers: mongoose.Types.ObjectId[] | string[];
  bookmarksBy: mongoose.Types.ObjectId[] | string[];
  answers: IAnswerDocument[];
  locked?: boolean;
  feelings?: Feelings;
  privacy?: PrivacyOptions;
}

export interface IAskDocument extends IAskBase {
  user: mongoose.Types.ObjectId;
}
