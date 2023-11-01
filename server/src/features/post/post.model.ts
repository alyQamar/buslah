import mongoose, { model, Model, Schema } from 'mongoose';
import { IPostDocument } from '@post/post.interfaces';

const postSchema: Schema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true },
  username: { type: String },
  email: { type: String },
  profilePicture: { type: String },
  post: { type: String, default: '' },
  bgColor: { type: String, default: '' },
  // For Uploaded media middleware------------------------
  imgId: { type: String, default: '' },
  // -----------------------------------------------------
  feelings: { type: String, default: '' },
  privacy: { type: String, default: '' },
  commentsCount: { type: Number, default: 0 },
  reactions: {
    like: { type: Number, default: 0 },
    love: { type: Number, default: 0 },
    celebrate: { type: Number, default: 0 },
    angry: { type: Number, default: 0 }
  }
}, { timestamps: true });

export const PostModel: Model<IPostDocument> = model<IPostDocument>('Post', postSchema, 'Post');

