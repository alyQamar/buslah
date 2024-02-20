import mongoose, { model, Model, Schema, Document, Types, Error as MongooseError } from 'mongoose';
import { IReviewDocument } from '@review/review.interface';
import User from '@user/user.model';
import { ConflictError, InternalServerError } from '@global/errorHandler.global';

const reviewSchema: Schema<IReviewDocument> = new Schema({
  txt: {
    type: String,
  },
  ratings: {
    type: Number,
    min: [1, 'Minimum rating value is 1.0'],
    max: [5, 'Maximum rating value is 5.0'],
    required: [true, 'Review ratings are required'],
  },
  mentee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a user'],
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Review must belong to a mentor'],
  },
},
  { timestamps: true });

reviewSchema.pre('find', function (next) {
  this.populate({ path: 'mentee', select: 'name' });
  this.populate({ path: 'mentor', select: 'name' });
  next();
});

reviewSchema.pre<IReviewDocument>('save', async function (next) {
  try {
    const existingReview = await this.model('Review').findOne({
      mentee: this.mentee,
      mentor: this.mentor
    });

    if (existingReview) {
      return next(new ConflictError("Review already exists for this mentee and mentor"));
    }

    next();
  } catch (error: any) {
    console.error('Error in save pre-hook:', error);
    next(new InternalServerError());
  }
});

reviewSchema.pre<IReviewDocument>('save', async function (next) {
  await this.calcAverageRatingsAndQuantity();
  next();
});

reviewSchema.pre<IReviewDocument>('remove', async function (next) {
  await this.calcAverageRatingsAndQuantity();
  next();
});

reviewSchema.methods.calcAverageRatingsAndQuantity = async function (): Promise<void> {
  try {
    const mentorId = this.mentor;

    const result = await this.model('Review').aggregate([
      {
        $match: { mentor: mentorId },
      },
      {
        $group: {
          _id: '$mentor',
          avgRatings: { $avg: '$ratings' },
          ratingsQuantity: { $sum: 1 },
        },
      },
    ]);

    if (result.length > 0) {
      const { avgRatings, ratingsQuantity } = result[0];
      await User.findByIdAndUpdate(mentorId, {
        ratingsAverage: avgRatings,
        ratingsQuantity: ratingsQuantity,
      });
    } else {
      // If no reviews found, set ratingsAverage and ratingsQuantity to 0
      await User.findByIdAndUpdate(mentorId, {
        ratingsAverage: 0,
        ratingsQuantity: 0,
      });
    }
  } catch (error) {
    console.error('Error calculating average ratings and quantity:', error);
  }
};

export const ReviewModel: Model<IReviewDocument> = model<IReviewDocument>('Review', reviewSchema);
