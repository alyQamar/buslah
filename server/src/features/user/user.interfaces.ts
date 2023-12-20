import mongoose, { Document } from 'mongoose';

export interface IUserDocument extends Document {
  _id: string | mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  role: string;
  photo?: string;
  country?: string;
  companyWorkingFor?: string;
  school?: string;
  interests?: string[];
  authID: {
    type: string | mongoose.Types.ObjectId;
    ref: 'auth';
  };
  followsID: {
    type: string | mongoose.Types.ObjectId;
    ref: 'follows';
  };
}
