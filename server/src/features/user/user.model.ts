import { model, Model, Schema, Document, Types } from 'mongoose'; // Importing Mongoose functions
import { ObjectId } from 'mongodb'; // Importing MongoDB's ObjectId
import { IUserDocument } from '@user/user.interfaces';
import { NextFunction } from 'express';
import followsModel from '@follows/follows.model';

// 2- Define a Mongoose schema for the user
const userSchema: Schema = new Schema(
  {
    savedPosts: [{ type: ObjectId, ref: 'Post' }],
    firstName: { type: String },
    lastName: { type: String },
    role: {
      type: String,
      enum: ['admin', 'mentor', 'mentee'],
      default: 'mentee'
    },
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

// 3) Creating the model from the schema
const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema);

// 4) Exporting the model to use it in other files/modules
export default UserModel;
