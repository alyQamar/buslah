import mongoose, { model, Model, Schema } from 'mongoose';
import { IPostDocument, Feelings } from '@post/post.interfaces';
import { PrivacyOptions } from '@auth/auth.interface';

const postSchema: Schema = new Schema(
  {
    // -----------------------------------------------------
    // referenced to another documents
    parentPost: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      index: true
    },
    prevPost: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      index: true
    },
    user: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
      required: true
    },
    bookmarksBy: [
      {
        type: String || mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    // -----------------------------------------------------
    post: {
      type: String,
      default: '',
      required: true
    },
    bgColor: {
      type: String,
      default: ''
    },
    feelings: {
      type: String,
      enum: Object.values(Feelings)
    },
    privacy: {
      type: String,
      enum: Object.values(PrivacyOptions),
      default: PrivacyOptions.Public
    },
    reactions: [
      {
        type: String || mongoose.Schema.Types.ObjectId,
        ref: 'Reaction'
      }
    ],
    comments: [
      {
        type: String || mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ],
    sharingNumbers: {
      shares: {
        type: Number,
        default: 0
      },
      bookmarks: {
        type: Number,
        default: 0
      }
    }
  },
  { timestamps: true }
);

// Mongoose query middleware
postSchema.pre(/^find/, function (next) {
  this.populate('user'); // Populate the 'user' field
  this.populate('parentPost'); // Populate the 'parentPost' field
  this.populate('prevPost'); // Populate the 'prevPost' field

  this.populate({
    path: 'reactions',
    select: 'reaction userID _id'
  });

  this.populate({
    path: 'comments',
    select: 'comment user _id'
  });
  next();
});

export const PostModel: Model<IPostDocument> = model<IPostDocument>('Post', postSchema);
