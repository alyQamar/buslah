import { Request, Response, NextFunction } from 'express';

import { BadRequestError } from '@global/errorHandler.global';

import { FeedItem } from '@feed/feed.interface';
import { IAskDocument } from '@ask/ask.interface';
import { AskModel } from '@ask/ask.model';
import { IPostDocument } from '@post/post.interfaces';
import { PostModel } from '@post/post.model';
import FeedService from './feed.service';
import { paginate } from '@service/db/common.service';




class feedController {
  /**
     * @desc Get all feed items
     * @route GET /feed/?sort=mostRecent&filterBy=all
     * @access Private/User
     */
  public static async getFeed(req: Request, res: Response, next: NextFunction) {
    try {
      const { sort, filterBy, limit, page } = req.query;
      let asks: IAskDocument[] = [];
      let posts: IPostDocument[] = [];

      switch (filterBy) {
        case 'all':
          asks = await AskModel.find().exec();
          posts = await PostModel.find().exec();
          break;
        case 'post':
          posts = await PostModel.find().exec();
          break;
        case 'qa':
          asks = await AskModel.find().exec();
          break;
        default:
          asks = await AskModel.find().exec();
          posts = await PostModel.find().exec();
          break;
      }

      let combinedFeed: FeedItem[] = [
        ...asks,
        ...posts,
      ];

      switch (sort) {
        case 'mostRecent':
          combinedFeed = FeedService.sortByMostResent(combinedFeed);
          break;
        default:
          break;
      }
      const countDocuments = combinedFeed.length;
      const pageNumber = Number(page) || 1;
      const limitNumber = Number(limit) || 25;
      const startIndex = (pageNumber - 1) * limitNumber;
      const endIndex = startIndex + limitNumber;

      const paginatedFeed = combinedFeed.slice(startIndex, endIndex);
      const paginationResult = paginate(countDocuments, Number(page), Number(limit));

      res.status(200).json({
        success: true,
        results: countDocuments,
        paginationResult,
        data: paginatedFeed,
      });
    } catch (error) {
      throw new BadRequestError();
    }
  }

}
export default feedController;
