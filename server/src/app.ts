import express, { Application } from 'express';
import { ServerInit } from '@root/server';

import dbConnection from '@config/database';
import { config } from '@root/config';
import authRouter from '@auth/routes/authRoute';

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.app.use(express.json()); // JSON parsing
  }

  private configInit(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }

  public init(): Application {
    this.configInit();
    dbConnection();

    const AuthRoutes = new authRouter();
    this.app.use(AuthRoutes.routes());
    const server = new ServerInit(this.app);
    server.start();
    return this.app;
  }
}

const router: App = new App();
const app = router.init();

export default app;
