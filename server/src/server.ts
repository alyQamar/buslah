/* eslint-disable @typescript-eslint/no-unused-vars */
import { Application, json, urlencoded, Response, Request, NextFunction } from 'express';
import http from 'http';
import cors from 'cors';
import compression from 'compression';
import cookieSession from 'cookie-session';
import { Server } from 'socket.io';
import { createClient } from 'redis';
import { createAdapter } from 'socket.io-redis-adapter';
import Logger from 'bunyan';
import 'express-async-errors';  // pass an error happens to response
import { config } from '@config/index';
import routes from '@root/routes';
import { ApiError, IErrorRes } from '@global/errorHandler.global';
import { SocketIOPost } from '@socket/post.socket';

const log: Logger = config.createLogger('server');

export class ServerInit {
  private app: Application;
  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routesMiddleware(this.app);
    this.ErrorHandlerMiddleware(this.app);
    this.startServer(this.app);
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: 'session',
        keys: [config.JWT_SECRET_KEY],
        maxAge: 24 * 7 * 3600000,
        secure: config.NODE_ENV === 'development' ? false : true
      })
    );

    app.use(
      cors()
    );
  }
  private standardMiddleware(app: Application): void {
    app.use(compression());
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
  }
  private routesMiddleware(app: Application): void {
    routes(app);
  }
  private ErrorHandlerMiddleware(app: Application): void {
    app.use((error: IErrorRes, _req: Request, res: Response, next: NextFunction) => {
      log.error(error);
      if (error instanceof ApiError) {
        if (config.NODE_ENV === 'development') {
          return res.status(error.statusCode).json(error.sendErrorForDev());
        } else {
          return res.status(error.statusCode).json(error.sendErrorForProd());
        }
      }
      next();
    });
  }

  // if you will test socket change it to async
  private startServer(app: Application): void {
    try {
      const httpServer: http.Server = new http.Server(app);
      // const socketIO: Server = await this.createSocketIO(httpServer);
      this.listenServer(httpServer);
      // this.socketIOConn(socketIO);
    } catch (error) {
      log.error(error);
    }
  }

  private async createSocketIO(httpServer: http.Server): Promise<Server> {
    const io: Server = new Server(httpServer, {
      cors: {
        origin: config.BASE_URL,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
      }
    });
    const pubClient = createClient({ url: config.REDIS_HOST });
    const subClient = pubClient.duplicate();
    await Promise.all([pubClient.connect(), subClient.connect()]);
    io.adapter(createAdapter(pubClient, subClient));
    return io;
  }

  private socketIOConn(io: Server): void {
    // handle all sockets connections
    const postSocket: SocketIOPost = new SocketIOPost(io);
  }

  private listenServer(httpServer: http.Server): void {
    httpServer.listen(config.PORT, () => {
      log.info(`Server running on port: ${config.PORT}, on process:${process.pid}`);
    });
  }
}
