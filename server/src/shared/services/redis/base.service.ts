import { createClient } from 'redis';
import Logger from 'bunyan';
import { config } from '@config/index';
export type RedisClientType = ReturnType<typeof createClient>;

abstract class BaseRedisCache {
  client: RedisClientType;
  log: Logger;

  constructor(redisCacheName: string) {
    this.client = createClient({ url: config.REDIS_HOST });
    this.log = config.createLogger(redisCacheName);
    this.redisCacheError();
  }

  private redisCacheError(): void {
    this.client.on('error', (error: unknown) => {
      this.log.error(error);
    });
  }
}

export default BaseRedisCache;
