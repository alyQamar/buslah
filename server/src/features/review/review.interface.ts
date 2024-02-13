import mongoose, { Document } from 'mongoose';


interface IReviewBase {
  title?: string;
  ratings: number;
  mentee: mongoose.Types.ObjectId | string;
}

export interface IReviewDocument extends Document, IReviewBase {
  mentor: mongoose.Types.ObjectId | string;
  calcAverageRatingsAndQuantity(mentorId: mongoose.Types.ObjectId | string): Promise<void>;
}
