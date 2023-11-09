import Logger from 'bunyan';
import { config } from '@config/index';
import BaseRedisCache from '@service/redis/base.service';

const log: Logger = config.createLogger('redisConnection');

class RedisConnection extends BaseRedisCache {
  constructor() {
    super('redisConnection');
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
      log.info(`Redis connection: ${await this.client.ping()}`);
    } catch (error) {
      log.error(error);
    }
  }
}

export const redisConnection: RedisConnection = new RedisConnection();
