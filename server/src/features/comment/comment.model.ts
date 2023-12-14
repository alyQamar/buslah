import mongoose, { model, Model, Schema } from 'mongoose';
import { ICommentDocument } from '@comment/comment.interfaces';
import { PostModel } from '@post/post.model';

const commentSchema: Schema = new Schema({
  comment: {
    type: String,
    required: [true, 'Comment required.']
  },
  reactions: [{
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Reaction'
  }],
  parentComment: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
    index: true
  },
  post: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    index: true,
    required: [true, 'Comment must belong to a post.']
  },
  user: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: [true, 'Comment must belong to a user.']
  },
}, { timestamps: true });

// update post after saving a comment
commentSchema.post<ICommentDocument>('save', async function (doc) {
  await PostModel.findByIdAndUpdate(doc.post, { $push: { comments: doc._id } });
});

commentSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'reactions',
    select: 'reaction userID -_id',
  });
  next();
});


export const CommentModel: Model<ICommentDocument> = model<ICommentDocument>('Comment', commentSchema);
