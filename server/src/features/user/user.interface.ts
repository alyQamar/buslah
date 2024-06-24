import mongoose, { Document } from 'mongoose';

export enum AnalysisCategory {
  TopRated = 'Top Rated',
  Recommended = 'Recommended'
}

export interface IExperience {
  title: string;
  company: string;
  fromDate: Date;
  toDate?: Date;
}

export interface IEducation {
  degree: string;
  school: string;
  fromDate: Date;
  toDate?: Date;
}

export interface ISocialLink {
  platform: string;
  link: string;
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
  city?: string;
  companyWorkingFor?: string;
  school?: string;
  languages?: string[];
  interests?: string[];
  experience?: IExperience[];
  education?: IEducation[];
  socialLinks?: ISocialLink[];
  active: boolean;
  ratingsAverage: number;
  ratingsQuantity: number;
  deletedAt?: Date;
  isDeleted: boolean;
}

export interface IUserDocument extends Document, IUserBase {
  _id: string | mongoose.Types.ObjectId;
  authID: string | mongoose.Types.ObjectId;
  followsID: string | mongoose.Types.ObjectId;
  wishlist: string | mongoose.Types.ObjectId;
  savedPosts: string | mongoose.Types.ObjectId;
}
