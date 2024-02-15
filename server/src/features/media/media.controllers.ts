import { Request, Response, NextFunction } from 'express';
import path from 'path';
import multer from 'multer';
import { clodService } from '../../shared/services/cloudinary/cloudinary';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { IMediaDocument } from '@media/media.interfaces';
import { MediaModel } from '@media/media.model';
import UserModel from '@user/user.model';
import fs from 'fs';
import { MediaType, ImageType, VideoType } from '@media/media.interfaces';
import { PostModel } from '@post/post.model';
import mongoose from 'mongoose';

const CRUDFunctions: CommonFunctions<IMediaDocument> = createCommonService<IMediaDocument>(MediaModel, 'Media');

class MediaController {
  private storage: multer.StorageEngine;
  private fileName: string | undefined;
  public uploadMiddleware;

  constructor() {
    this.storage = multer.diskStorage({
      destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, path: string) => void) {
        cb(null, path.join(__dirname, '../../../images'));
      },

      filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        if (file) {
          cb(null, (this.fileName = new Date().toISOString().replace(/:/g, '-') + file.originalname));
        }
      }
    });
    this.uploadMiddleware = multer({
      storage: this.storage,
      fileFilter: function (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) {
        if (file.mimetype.startsWith('image')) {
          cb(null, true);
        } else {
          cb(new Error('Unsupported file format') as unknown as null, false);
        }
      },
      limits: { fileSize: 1024 * 1024 } // 1 megabyte
    });
  }
}
