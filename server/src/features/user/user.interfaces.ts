import mongoose, { Document } from 'mongoose';

export enum AnalysisCategory {
  TopRated = 'Top Rated',
  Recommended = 'Recommended'

}

export interface IUserBase {
  firstName: string;
  lastName: string;
  headline?: string;
  pricePerHour?: number;
  analysisCategory?: AnalysisCategory;
  profilePhoto?: string | mongoose.Types.ObjectId;
  coverPhoto?: string | mongoose.Types.ObjectId;
  country?: string;
  companyWorkingFor?: string;
  school?: string;
  interests?: string[];
  active: boolean;
  ratingsAverage: number;
  ratingsQuantity: number;
}

export interface IUserDocument extends Document, IUserBase {
  _id: string | mongoose.Types.ObjectId;
  authID: {
    type: string | mongoose.Types.ObjectId;
    ref: 'auth';
  };
  followsID: {
    type: string | mongoose.Types.ObjectId;
    ref: 'auth';
  };
  wishlist: {
    type: string | mongoose.Types.ObjectId;
    ref: 'follows';
  };
  savedPosts: {
    type: string | mongoose.Types.ObjectId;
    ref: 'follows';
  };
}
