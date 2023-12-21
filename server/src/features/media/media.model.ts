import mongoose, { model, Model, Schema } from 'mongoose';
import { IMediaDocument, MediaType, ImageType, VideoType } from '@media/media.interfaces';

const mediaSchema = new Schema<IMediaDocument>({
  // -----------------------------------------------------
  // referenced to another documents
  user: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model
    required: true
  },
  Post: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Post'  // Reference to the Post model, if needed
  },
  // -----------------------------------------------------
  mediaType: {
    type: String,
    enum: Object.values(MediaType),
    required: true
  },

  type: {
    type: String,
    enum: [...Object.values(ImageType), ...Object.values(VideoType)],
    required: true
  },
  url: {
    type: String,
    required: true
  },
  originalName: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  version: {
    type: Date || String,
    default: Date.now
  },
  metadata: {
    description: {
      type: String
    }
  },
  duration: {
    type: Number,  // Duration in seconds
  },
  resolution: {
    type: String,  // Resolution like :'1920x1080'
  },

}, { timestamps: true });

// Mongoose pre-hook to set mediaType based on mimeType
mediaSchema.pre('save', function (this: IMediaDocument, next) {
  if (this.mimeType.startsWith('image/')) {
    this.mediaType = MediaType.Image;
  } else if (this.mimeType.startsWith('video/')) {
    this.mediaType = MediaType.Video;
  } else {
    throw new Error('Unsupported media type');
  }
  next();
});

export const MediaModel: Model<IMediaDocument> = model<IMediaDocument>('Media', mediaSchema);
