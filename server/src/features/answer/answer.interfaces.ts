import mongoose, { Document } from 'mongoose';

interface IAnswerBase {
  answer: string;
  helpfulUsers: mongoose.Types.ObjectId[] | string[];
  unhelpfulUsers: mongoose.Types.ObjectId[] | string[];
}

export interface IAnswerDocument extends Document, IAnswerBase {
  _id: mongoose.Types.ObjectId | string;
  parentAnswer?: mongoose.Types.ObjectId | string;
  ask: mongoose.Types.ObjectId | string;
  user: mongoose.Types.ObjectId | string;
}
