import mongoose, { Document } from 'mongoose';

export interface IUserDocument extends Document {
  _id: string | mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  photo?: string;
  country?: string;
  companyWorkingFor?: string;
  school?: string;
  interests?: string[];
}
