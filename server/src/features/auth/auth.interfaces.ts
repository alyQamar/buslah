import mongoose, { Document } from 'mongoose';

// Enum for defining privacy options
export enum PrivacyOptions {
  Public = 'public',
  Private = 'private',
  Followers = 'followers',
}

// Enum for defining user roles
export enum Roles {
  Mentee = 'mentee',
  Mentor = 'mentor',
  Admin = 'admin',
  Manager = 'manager',
  Owner = 'owner'
}

export interface IAuthBase {
  username: string;
  role: Roles;
  email: string;
  password: string;
  passwordResetCode?: string;
  passwordResetExpires?: number | string;
  passwordChangedAt?: Date;

  comparePassword(candidatePassword: string): Promise<boolean>;
  createPasswordResetCode(): number;
  checkResetPasswordCode(passwordResetCode: string): boolean;
}

export interface IAuthDocument extends Document, IAuthBase {
  user: string | mongoose.Schema.Types.ObjectId;
}
