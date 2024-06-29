import { Model, model, Schema } from 'mongoose';
import { ObjectId } from 'mongodb';
import { AnalysisCategory, IUserDocument } from '@user/user.interface';

const userSchema: Schema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    headline: { type: String },
    pricePerHour: { type: Number },
    analysisCategory: { type: String, enum: Object.values(AnalysisCategory) },
    profilePhoto: { type: ObjectId, ref: 'MediaModel' },
    coverPhoto: { type: ObjectId, ref: 'MediaModel' },
    city: { type: String },
    country: { type: String },
    companyWorkingFor: { type: String },
    school: { type: String },
    languages: { type: [String] },
    interests: { type: [String] },
    skills: { type: [String] },
    experience: [
      {
        title: { type: String, required: true },
        company: { type: String, required: true },
        fromDate: { type: Date, required: true },
        toDate: { type: Date }
      }
    ],
    education: [
      {
        degree: { type: String, required: true },
        school: { type: String, required: true },
        fromDate: { type: Date, required: true },
        toDate: { type: Date }
      }
    ],
    socialLinks: [
      {
        platform: { type: String, required: true },
        link: { type: String, required: true }
      }
    ],
    active: { type: Boolean, default: true },
    ratingsAverage: { type: Number, min: 1, max: 5, default: 1 },
    ratingsQuantity: { type: Number, default: 0 },
    bookmarks: [{ type: { type: String }, id: { type: ObjectId } }],
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
      }],
    deletedAt: { type: Date },
    isDeleted: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
);

userSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'product',
  localField: '_id',
});

const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema);

export default UserModel;
