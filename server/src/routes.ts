import { Application } from 'express';
import { authRoutes } from '@auth/auth.route';
import { userRoutes } from '@user/user.route';
import { postRoutes } from '@post/post.routes';
import { reactionRoutes } from '@reaction/reaction.routes';
import { commentRoutes } from '@comment/comment.routes';
import { followsRoutes } from '@follows/follows.routes';
import { mediaRoutes } from '@media/media.routes';
import { askRoutes } from '@ask/ask.routes';
import { answerRoutes } from '@answer/answer.routes';
import { reviewRoutes } from '@review/review.route';
import { feedbackRoutes } from '@feedback/feedback.routes';

export default (app: Application) => {
  const routes = () => {
    app.use('/auth', authRoutes.routes());
    app.use('/follow', followsRoutes.routes());
    app.use('/users', userRoutes.routes());
    app.use('/posts', postRoutes.routes());
    app.use('/comments', commentRoutes.routes());
    app.use('/reactions', reactionRoutes.routes());
    app.use('/media', mediaRoutes.routes());
    app.use('/asks', askRoutes.routes());
    app.use('/answers', answerRoutes.routes());
    app.use('/reviews', reviewRoutes.routes());
    app.use('/feedbacks', feedbackRoutes.routes());
  };
  routes();
};
