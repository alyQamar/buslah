import { Application } from 'express';
import { authRoutes } from '@auth/auth.routes';
import { userRoutes } from '@user/user.routes';
import { postRoutes } from '@post/post.routes';
import { reactionRoutes } from '@reaction/reaction.routes';
import { commentRoutes } from '@comment/comment.routes';
import { FollowsRoutes } from '@follows/follows.routes';
import { mediaRoutes } from '@media/media.routes';

export default (app: Application) => {
  const routes = () => {
    app.use(authRoutes.routes());
    app.use(FollowsRoutes.routes());
    app.use('/users', userRoutes.routes());
    app.use('/posts', postRoutes.routes());
    app.use('/comments', commentRoutes.routes());
    app.use('/reactions', reactionRoutes.routes());
    app.use('/media', mediaRoutes.routes());
  };
  routes();
};
