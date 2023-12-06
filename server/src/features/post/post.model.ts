import mongoose, { model, Model, Schema } from 'mongoose';
import { IPostDocument } from '@post/post.interfaces';

const postSchema: Schema = new Schema(
  {
    authorID: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'user',
      index: true,
      required: [true, 'Post must belong to a user.']
    },
    post: { type: String, default: '' },
    bgColor: { type: String, default: '' },
    createdAt: {
      type: Date,
      default: Date.now
    },
    reactions: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'reaction'
    }
  },
  { timestamps: true }
);

export const PostModel: Model<IPostDocument> = model<IPostDocument>('Post', postSchema);
