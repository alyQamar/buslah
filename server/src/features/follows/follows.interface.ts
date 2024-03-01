import mongoose, { Document } from 'mongoose';
import { IUserDocument } from '@user/user.interface';

export interface IFollowsDocument extends Document {
  followers: mongoose.Types.ObjectId[];
  followings: mongoose.Types.ObjectId[];
}
