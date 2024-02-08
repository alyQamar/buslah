import { ObjectId } from 'mongodb';

export enum PrivacyOptions {
  Public = 'public',
  Private = 'private',
  Followers = 'followers',
}

export interface IAuthDocument extends Document {
  _id: string | ObjectId;
  uId: string;
  name: string;
  email: string;
  password: string;
  passwordResetCode?: number;
  passwordResetExpires?: number | string;
  comparePassword(candidatePassword: string): Promise<boolean>;
  createPasswordResetCode(): string;
  checkResetPasswordCode(passwordResetCode: string): boolean;
}
