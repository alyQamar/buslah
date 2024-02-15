import mongoose, { model, Model, Schema } from 'mongoose';

import { AskModel } from '@ask/ask.model';
import { IAnswerDocument } from '@answer/answer.interfaces';

const answerSchema: Schema = new Schema({
  answer: {
    type: String,
    required: [true, 'Answer required.']
  },
  helpfulUsers: [{
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  unhelpfulUsers: [{
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  parentAnswer: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Answer',
    index: true
  },
  ask: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Ask',
    index: true,
    required: [true, 'Answer must belong to a Ask.']
  },
  user: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: [true, 'Answer must belong to a user.']
  },
}, { timestamps: true });


answerSchema.methods.markAsHelpful = function (userId: mongoose.Schema.Types.ObjectId) {
  if (!this.helpfulUsers.includes(userId)) {
    this.helpfulUsers.push(userId);
    this.unhelpfulUsers = this.unhelpfulUsers.filter((id: mongoose.Schema.Types.ObjectId) => id !== userId);
    // Ensure the user is removed from unhelpfulUsers if they previously marked the answer as unhelpful
    return this.save(); // Save the updated document
  }
};

answerSchema.methods.markAsUnhelpful = function (userId: mongoose.Schema.Types.ObjectId) {
  if (!this.unhelpfulUsers.includes(userId)) {
    this.unhelpfulUsers.push(userId);
    this.helpfulUsers = this.helpfulUsers.filter((id: mongoose.Schema.Types.ObjectId) => id !== userId);
    // Ensure the user is removed from helpfulUsers if they previously marked the answer as helpful
    return this.save(); // Save the updated document
  }
};

// update ask after saving a answer
answerSchema.post<IAnswerDocument>('save', async function (doc) {
  await AskModel.findByIdAndUpdate(doc.ask, { $push: { answers: doc._id } });
});


export const AnswerModel: Model<IAnswerDocument> = model<IAnswerDocument>('Answer', answerSchema);


