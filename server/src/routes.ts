import { Application } from 'express';
import { authRoutes } from '@auth/routes/authRoutes';
import { userRoutes } from '@user/routes/userRoutes';
import { postRoutes } from '@post/post.routes';

export default (app: Application) => {
  const routes = () => {
    app.use(authRoutes.routes());
    app.use('/users', userRoutes.routes());
    app.use('/posts', postRoutes.routes());
  };
  routes();
};
