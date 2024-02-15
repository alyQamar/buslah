import mongoose, { model, Model, Schema } from 'mongoose';
import { IReactionDocument } from '@reaction/reaction.interfaces';

const reactionSchema: Schema = new Schema({
  user: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Reaction must belong to a user.'],
    unique: true
  },
  onPost: {
    type: Boolean
  },
  post: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'post',
    // required: [true, 'Reaction must belong to a post.'],
    unique: true
  },
  comment: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'comment',
    // required: [true, 'Reaction must belong to a post.'],
    unique: true
  },
  reaction: {
    type: String,
    enum: ['like', 'love', 'laugh', 'wow', 'celebrate', 'support', 'angry', 'crying'],
    default: 'like'
  }
});

export const reactionModel: Model<IReactionDocument> = model<IReactionDocument>('Reaction', reactionSchema);
