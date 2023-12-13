import { ObjectId } from 'mongodb';
import { Schema, model, Model } from 'mongoose';

import { IPostDocument, Feelings, PrivacyOptions } from '@post/post.interfaces';

const postSchema: Schema = new Schema({
  // -----------------------------------------------------
  // referenced to another documents
  parentPost: { type: ObjectId, ref: 'Post', index: true },
  prevPost: { type: ObjectId, ref: 'Post', index: true },
  user: { type: ObjectId, ref: 'User', index: true },
  bookmarksBy: [{ type: ObjectId, ref: 'User' }],
  // -----------------------------------------------------
  content: { type: String, default: '' },
  bgColor: { type: String, default: '' },
  feelings: { type: String, enum: Object.values(Feelings), default: '' },
  privacy: { type: String, enum: Object.values(PrivacyOptions), default: PrivacyOptions.Public },
  reactions: [{ type: ObjectId, ref: 'Reaction' }],
  comments: [{ type: ObjectId, ref: 'Comment' }],
  commentsCount: { type: Number, default: 0 },
  reactionsCount: {
    like: { type: Number, default: 0 },
    love: { type: Number, default: 0 },
    celebrate: { type: Number, default: 0 },
    angry: { type: Number, default: 0 },
  },
  sharingNumbers: {
    shares: { type: Number, default: 0 },
    bookmarks: { type: Number, default: 0 },
  }
}, { timestamps: true });

// Mongoose query middleware
postSchema.pre(/^find/, function (next) {
  this.populate('user'); // Populate the 'user' field
  this.populate('parentPost'); // Populate the 'parentPost' field
  this.populate('prevPost'); // Populate the 'prevPost' field

  this.populate({
    path: 'reactions',
    select: 'name -_id',
  });
  this.populate({
    path: 'comments',
    populate: {
      path: 'reactions',
      select: 'name -_id',
    },
  });
  next();
});

export const PostModel: Model<IPostDocument> = model<IPostDocument>('Post', postSchema);

