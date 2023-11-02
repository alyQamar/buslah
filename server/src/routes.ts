import { Application } from 'express';
import { authRoutes } from '@auth/routes/authRoutes';
import { userRoutes } from '@user/routes/userRoutes';

export default (app: Application) => {
  const routes = () => {
    app.use(authRoutes.routes());
    app.use('/users', userRoutes.routes());
  };
  routes();
};
