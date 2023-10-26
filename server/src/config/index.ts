import dotenv from 'dotenv';
import bunyan from 'bunyan';
import cloudinary from 'cloudinary';
dotenv.config({ path: '.env' });

class Config {
  public PORT: string | undefined;
  public NODE_ENV: string | undefined;
  public BASE_URL: string | undefined;
  public DB_URI: string | undefined;
  public REDIS_HOST: string | undefined;
  public JWT_TOKEN: string | undefined;
  public SECRET_KEY_ONE: string;
  public SECRET_KEY_TWO: string;
  public CLOUD_NAME: string;
  public CLOUD_API_KEY: string;
  public CLOUD_API_SECRET: string;
  private readonly DEFAULT_DB_URI =
    'mongodb+srv://admin:hdueac55rcbv88pi@cluster0.jz9fs49.mongodb.net/movie-db?retryWrites=true&w=majority';

  constructor() {
    this.PORT = process.env.PORT || '3000';
    this.NODE_ENV = process.env.NODE_ENV || '';
    this.BASE_URL = process.env.CLIENT_URL || '';
    this.DB_URI = process.env.DB_URI || this.DEFAULT_DB_URI;
    this.REDIS_HOST = process.env.REDIS_HOST || '';
    this.JWT_TOKEN = process.env.JWT_TOKEN || '1234';
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || '';
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || '';
    this.CLOUD_NAME = process.env.CLOUD_NAME || '';
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY || '';
    this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || '';
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
