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
  private diskStorage: multer.StorageEngine;
  private memoryStorege: multer.StorageEngine;
  private fileName: string | undefined;
  public uploadMiddleware;

  constructor() {
    this.diskStorage = multer.diskStorage({
      destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, path: string) => void) {
        cb(null, path.join(__dirname, '../../../images'));
      },

      filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        if (file) {
          cb(null, (this.fileName = new Date().toISOString().replace(/:/g, '-') + file.originalname));
        }
      }
    });

    this.memoryStorege = multer.memoryStorage();

    this.uploadMiddleware = multer({
      storage: this.memoryStorege,
      fileFilter: function (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) {
        if (file.mimetype.startsWith('image')) {
          cb(null, true);
        } else {
          cb(new Error('Unsupported file format') as unknown as null, false);
        }
      },
      limits: { fileSize: 1024 * 1024 } // 1 megabyte
    });

    this.uploadMiddleware = multer({ storage: this.memoryStorege });
  }

  public async uploadPhoto(req: Request, res: Response, next: NextFunction) {
    //  validation

    if (!req.file) {
      return res.status(400).json({ message: 'no file provided ' });
    }

    // Extract the image data from req.file.buffer

    const base64Image = req.file.buffer.toString('base64');

    //  upload to cloudinary

    const result: { secure_url: string; public_id: string } = (await clodService.uploadImage(
      `data:${req.file.mimetype};base64,${base64Image}`
    )) as any;

    //  Get the user from DB
    const { Id, type } = req.params;
    const user = await UserModel.findById(Id);

    if (type === 'profile') {
      //  Delete the old profile photo if exist
      if (user && user.profilePhoto && user.profilePhoto !== null) {
        const photo = await MediaModel.findById(user.profilePhoto);
        if (photo) {
          await clodService.removeImage(photo.publicId);
          photo.url = result.secure_url;
          photo.publicId = result.public_id;
          await photo.save();
        }
      } else if (user) {
        // Create new document for the media
        const data = {
          user: Id,
          mediaType: MediaType.Image,
          type: ImageType.Profile,
          url: result.secure_url,
          publicId: result.public_id,
          size: req.file.size,
          mimeType: req.file.mimetype,
          originalName: req.file.originalname
        };
        const newMedia = await MediaModel.create(data);
        user.profilePhoto = newMedia._id;
        await user.save();
      }
    } else if (type === 'cover') {
      //  Delete the old cover photo if exist
      if (user && user.coverPhoto && user.coverPhoto !== null) {
        const photo = await MediaModel.findById(user.coverPhoto);
        if (photo) {
          await clodService.removeImage(photo.publicId);
          photo.url = result.secure_url;
          photo.publicId = result.public_id;
          await photo.save();
        }
      } else if (user) {
        // Create new document for the media
        const data = {
          user: Id,
          mediaType: MediaType.Image,
          type: ImageType.Cover,
          url: result.secure_url,
          publicId: result.public_id,
          size: req.file.size,
          mimeType: req.file.mimetype,
          originalName: req.file.originalname
        };
        const newMedia = await MediaModel.create(data);
        user.coverPhoto = newMedia._id;
        await user.save();
      }
    } else if (type === 'post') {
      // Create new document for the media
      let post = await PostModel.findById(Id);

      const data = {
        post: Id,
        mediaType: MediaType.Image,
        type: ImageType.Post,
        url: result.secure_url,
        publicId: result.public_id,
        size: req.file.size,
        mimeType: req.file.mimetype,
        originalName: req.file.originalname
      };
      const newMedia = await MediaModel.create(data);
      if (post) {
        post.imgId = newMedia._id;
        await post.save();
      }
    }

    //  send response to the client
    res.status(200).json({ message: 'upload image successfully.', photo: { url: result.secure_url, publicId: result.public_id } });

    // //  remove image from the server
    // fs.unlinkSync(imagePath);
  }
}

export const mediaController: MediaController = new MediaController();
