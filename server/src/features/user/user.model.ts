import { model, Model, Schema, Document, Types } from 'mongoose';
import { ObjectId } from 'mongodb';
import { AnalysisCategory, IUserDocument } from '@user/user.interface';

const userSchema: Schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    headline: { type: String },
    pricePerHour: { type: Number },
    analysisCategory: { type: String, enum: AnalysisCategory },
    profilePhoto: { type: String || ObjectId, ref: 'MediaModel' },
    coverPhoto: { type: String || ObjectId, ref: 'MediaModel' },
    country: { type: String },
    companyWorkingFor: { type: String },
    school: { type: String },
    interests: { type: [String] },
    active: {
      type: Boolean,
      default: true,
    },
    ratingsAverage: {
      type: Number,
      min: [1, 'Rating must be above or equal 1.0'],
      max: [5, 'Rating must be below or equal 5.0'],
      // set: (val) => Math.round(val * 10) / 10, // 3.3333 * 10 => 33.333 => 33 => 3.3
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    authID: {
      type: String || ObjectId,
      ref: 'auth'
    },
    followsID: {
      type: String || ObjectId,
      ref: 'follows'
    },
    wishlist: [
      {
        type: ObjectId,
        ref: 'user',
      },
    ],
    savedPosts: [{ type: ObjectId, ref: 'Post' }],
  },
  {
    timestamps: true
  }
);

userSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id',
});

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema);

export default UserModel;
