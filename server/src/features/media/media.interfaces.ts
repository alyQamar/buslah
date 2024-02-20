import mongoose, { Document } from 'mongoose';

export enum MediaType {
  Image = 'image',
  Video = 'video'
}

export enum ImageType {
  Profile = 'profile',
  Post = 'post',
  Cover = 'cover'
}

export enum VideoType {
  Post = 'post'
}

interface IMediaBase {
  type: ImageType | VideoType;
  url: string;
  publicId: string;
  originalName: string;
  size: number; // Size of the image in bytes
  mimeType: string; // MIME type of the image or video (e.g., 'image/jpg', 'image/png','video/mp4')
  version?: Date;
  metadata?: {
    description?: string;
    // Add more metadata fields as needed
  };
  // Video fields
  duration?: number; // Duration of the video in seconds
  resolution?: string; //// Resolution like :'1920x1080'
}

export interface IMediaDocument extends Document, IMediaBase {
  _id: mongoose.Types.ObjectId | string;
  user: mongoose.Types.ObjectId | string;
  Post?: mongoose.Types.ObjectId | string;
  mediaType?: MediaType;
}
