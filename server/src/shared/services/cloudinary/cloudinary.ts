import cloudinary from 'cloudinary';
import { config } from './../../../config/index';

class cloudinaryService {
  private cloudinaryConfiguration: cloudinary.ConfigOptions;

  constructor() {
    // Initialize Cloudinary configuration
    this.cloudinaryConfiguration = {
      cloud_name: config.CLOUD_NAME,
      api_key: config.CLOUD_API_KEY,
      api_secret: config.CLOUD_API_SECRET
    };
    // Configure Cloudinary
    cloudinary.v2.config(this.cloudinaryConfiguration);
  }

  // Cloudinary Upload Image
  public uploadImage = async (fileToUpload: string) => {
    try {
      const data = await cloudinary.v2.uploader.upload(fileToUpload, { resource_type: 'auto' });
      return data;
    } catch (error) {
      return error;
    }
  };

  // Cloudinary Remove Image

  public removeImage = async (imagePublicId: string) => {
    try {
      const data = await cloudinary.v2.uploader.destroy(imagePublicId);
      return data;
    } catch (error) {
      return error;
    }
  };
}

export const clodService: cloudinaryService = new cloudinaryService();
