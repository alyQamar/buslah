import mongoose from 'mongoose'; // setup mongoDB connection)
import Logger from 'bunyan';

import { config } from './index';
// import { redisConnection } from './redis';

const log: Logger = config.createLogger('database');

const connect = (): void => {
  mongoose
    .connect(`${config.DB_URI}`)
    .then((conn) => {
      log.info(`DB connected: ${conn.connection.host}`);
      // redisConnection.connect();
    })
    .catch((err) => {
      log.error('Error occurred while connecting to database', err);
      return process.exit(1);
    });
};

const connection: mongoose.Connection = mongoose.connection;

const dbConnection = (): void => {
  connect();
  connection.on('disconnected', connect);
};

export default dbConnection;
