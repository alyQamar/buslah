import { Application } from 'express';
import { authRoutes } from '@auth/routes/authRoutes';

export default (app: Application) => {
  const routes = () => {
    app.use(authRoutes.routes());
  };
  routes();
};
