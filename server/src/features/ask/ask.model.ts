import mongoose, { model, Model, Schema } from 'mongoose';
import { AskType, IAskDocument } from '@ask/ask.interface';
import { PrivacyOptions } from '@auth/auth.interface';

const askSchema: Schema = new Schema({
  user: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Reaction must belong to a user.']
  },
  question: {
    type: String,
    required: [true, 'An ask must have a question']
  },
  helpfulUsers: [
    {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  unhelpfulUsers: [
    {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  bookmarksBy: [
    {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  locked: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    enum: Object.values(AskType),
    default: 'normal'
  },
  privacy: {
    type: String,
    enum: Object.values(PrivacyOptions),
    default: PrivacyOptions.Public
  },
  answers: [
    {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'Answer'
    }
  ]
});

// Mongoose query middleware
askSchema.pre(/^find/, function (next) {
  this.populate('user');
  this.populate('bookmarksBy');

  this.populate('helpfulUsers');
  this.populate('unhelpfulUsers');

  this.populate({
    path: 'answers',
    select: 'answer user _id'
  });
  next();
});

askSchema.methods.markAsHelpful = function (userId: mongoose.Schema.Types.ObjectId) {
  if (!this.helpfulUsers.includes(userId)) {
    this.helpfulUsers.push(userId);
    this.unhelpfulUsers = this.unhelpfulUsers.filter((id: mongoose.Schema.Types.ObjectId) => id !== userId);
    // Ensure the user is removed from unhelpfulUsers if they previously marked the ask as unhelpful
    return this.save(); // Save the updated document
  }
};

askSchema.methods.markAsUnhelpful = function (userId: mongoose.Schema.Types.ObjectId) {
  if (!this.unhelpfulUsers.includes(userId)) {
    this.unhelpfulUsers.push(userId);
    this.helpfulUsers = this.helpfulUsers.filter((id: mongoose.Schema.Types.ObjectId) => id !== userId);
    // Ensure the user is removed from helpfulUsers if they previously marked the ask as helpful
    return this.save(); // Save the updated document
  }
};

export const AskModel: Model<IAskDocument> = model<IAskDocument>('Ask', askSchema);
