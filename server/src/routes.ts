import { Application } from 'express';
import { authRoutes } from '@auth/auth.routes';
import { userRoutes } from '@user/user.routes';
import { postRoutes } from '@post/post.routes';

export default (app: Application) => {
  const routes = () => {
    app.use(authRoutes.routes());
    app.use('/users', userRoutes.routes());
    app.use('/posts', postRoutes.routes());
  };
  routes();
};
