import { string } from 'joi';
import dotenv from 'dotenv';
import bunyan from 'bunyan';
import cloudinary from 'cloudinary';
dotenv.config({ path: '.env' });

class Config {
  public PORT: string | undefined;
  public NODE_ENV: string | undefined;
  public BASE_URL: string | undefined;
  public CLIENT_URL: string | undefined;
  public DB_URI: string | undefined;
  public REDIS_HOST: string | undefined;
  public JWT_SECRET_KEY: string | '12325';
  public JWT_EXPIRE_TIME: string | undefined;
  public JWT_COOKIE_EXPIRE_IN: string;
  public CLOUD_NAME: string;
  public CLOUD_API_KEY: string;
  public CLOUD_API_SECRET: string;
  public GMAIL_EMAIL: string;
  public GMAIL_PASSWORD: string;
  public RESET_PASSWORD_VERIFICATION_CODE_EXPIRE_IN: string;

  constructor() {
    this.PORT = process.env.PORT || '3000';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.BASE_URL = process.env.BASE_URL || '';
    this.CLIENT_URL = process.env.CLIENT_URL || '';
    this.DB_URI = process.env.DB_URI || '';
    this.REDIS_HOST = process.env.REDIS_HOST || '';
    this.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || '1234';
    this.JWT_EXPIRE_TIME = process.env.JWT_EXPIRE_TIME || '';
    this.JWT_COOKIE_EXPIRE_IN = process.env.JWT_COOKIE_EXPIRE_IN || '30';
    this.CLOUD_NAME = process.env.CLOUD_NAME || '';
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY || '';
    this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || '';
    this.GMAIL_EMAIL = process.env.GMAIL_EMAIL || '';
    this.GMAIL_PASSWORD = process.env.GMAIL_PASSWORD || '';
    this.RESET_PASSWORD_VERIFICATION_CODE_EXPIRE_IN = process.env.RESET_PASSWORD_VERIFICATION_CODE_EXPIRE_IN || '600000';
  }

  public createLogger(name: string): bunyan {
    return bunyan.createLogger({ name, level: 'debug' });
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined.`);
      }
    }
  }
  public cloudinaryConfig(): void {
    cloudinary.v2.config({
      cloud_name: this.CLOUD_NAME,
      api_key: this.CLOUD_API_KEY,
      api_secret: this.CLOUD_API_SECRET
    });
  }
}
export const config: Config = new Config();
