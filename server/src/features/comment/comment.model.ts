import mongoose, { model, Model, Schema, Query } from 'mongoose';
import { ICommentDocument } from '@comment/comment.interfaces';
import { ObjectId } from 'mongodb';

const commentSchema: Schema = new Schema({
  content: { type: String, default: '' },
  reactions: [{ type: ObjectId, ref: 'Reaction' }],
  parentComment: { type: ObjectId, ref: 'Comment', index: true },
  post: { type: ObjectId, ref: 'Post', index: true },
  user: { type: ObjectId, ref: 'User', index: true },
}, { timestamps: true });

// Mongoose query middleware
commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'reactions',
    select: 'name -_id',
  });
  next();
});


export const CommentModel: Model<ICommentDocument> = model<ICommentDocument>('Comment', commentSchema);
