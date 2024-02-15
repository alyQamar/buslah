import mongoose, { Document, Model } from 'mongoose';


interface IReviewBase {
  title?: string;
  ratings: number;
  mentee: mongoose.Types.ObjectId | string;
}

export interface IReviewDocument extends Document, IReviewBase {
  mentor: mongoose.Types.ObjectId | string;
  model(name?: string): Model<IReviewDocument>;
  calcAverageRatingsAndQuantity(): Promise<void>;
}
