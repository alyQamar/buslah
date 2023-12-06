import mongoose, { model, Model, Schema } from 'mongoose';
import { IReactionDocument } from '@reaction/reaction.interfaces';

const reactionSchema: Schema = new Schema({
  userID: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Reaction must belong to a user.'],
    unique: true
  },
  postID: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'post',
    required: [true, 'Reaction must belong to a post.'],
    unique: true
  },
  reaction: {
    type: String,
    enum: ['like', 'dislike', 'love'],
    default: 'like'
  }
  // TODO: make reaction for the comments (add commentID) .. and make its controllers and routes
});

export const reactionModel: Model<IReactionDocument> = model<IReactionDocument>('Reaction', reactionSchema);
