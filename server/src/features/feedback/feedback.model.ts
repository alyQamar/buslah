import mongoose, { model, Model, Schema } from 'mongoose';
import { IFeedbackDocument } from '@feedback/feedback.interfaces';

const feedbackSchema: Schema = new Schema(
  {
    sender: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Feedback has to be given by a user']
    },
    receiver: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Feedback has to be given to a user']
    },
    session: {
      type: String || mongoose.Schema.Types.ObjectId,
      // ref: 'Session', // TODO: after making the session feature
      required: [true, 'Feedback has to be given on a session']
    },
    rating: {
      type: Number,
      default: 3,
      required: true
    },
    feedback: {
      type: String,
      default: ''
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

feedbackSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'sender receiver',
    select: '_id firstName lastName'
  });

  next();
});

export const FeedbackModel: Model<IFeedbackDocument> = model<IFeedbackDocument>('Feedback', feedbackSchema);
