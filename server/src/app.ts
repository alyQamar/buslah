import express, { Express } from 'express';
import { ServerInit } from '@root/server';

import dbConnection from '@config/database';
import { config } from '@root/config';

class App {
  public init(): void {
    this.configInit();
    dbConnection();
    const app: Express = express();
    const server = new ServerInit(app);
    server.start();
  }

  private configInit(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}
const app: App = new App();
app.init();
