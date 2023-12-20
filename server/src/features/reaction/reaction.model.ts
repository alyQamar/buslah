import mongoose, { model, Model, Schema } from 'mongoose';
import { IReactionDocument } from '@reaction/reaction.interfaces';
import { boolean } from 'joi';

const reactionSchema: Schema = new Schema({
  userID: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Reaction must belong to a user.'],
    unique: true
  },
  onPost: {
    type: boolean
  },
  postID: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'post',
    required: [true, 'Reaction must belong to a post.'],
    unique: true
  },
  commentID: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'comment',
    required: [true, 'Reaction must belong to a post.'],
    unique: true
  },
  reaction: {
    type: String,
    enum: ['like', 'dislike', 'love'],
    default: 'like'
  }
});

export const reactionModel: Model<IReactionDocument> = model<IReactionDocument>('Reaction', reactionSchema);
