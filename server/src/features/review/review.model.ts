import mongoose, { model, Model, Schema, Document } from 'mongoose';
import { IReviewDocument } from '@review/review.interface';
import User from '@user/user.model';

const reviewSchema: Schema<IReviewDocument> = new Schema({
  title: {
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

reviewSchema.statics.calcAverageRatingsAndQuantity = async function (
  mentorId: mongoose.Types.ObjectId | string
): Promise<void> {
  try {
    const result = await this.aggregate([
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

    const { avgRatings, ratingsQuantity } = result[0] || { avgRatings: 0, ratingsQuantity: 0 };

    await User.findByIdAndUpdate(mentorId, {
      ratingsAverage: avgRatings,
      ratingsQuantity: ratingsQuantity,
    });
  } catch (error) {
    console.error('Error calculating average ratings and quantity:', error);
  }
};

reviewSchema.post('save', async function (doc: IReviewDocument) {
  await doc.calcAverageRatingsAndQuantity(doc.mentor);
});

reviewSchema.post('remove', async function (doc: IReviewDocument) {
  await doc.calcAverageRatingsAndQuantity(doc.mentor);
});

export const ReviewModel: Model<IReviewDocument> = model<IReviewDocument>('Review', reviewSchema);
