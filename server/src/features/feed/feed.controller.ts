import { IAskDocument } from '@ask/ask.interface';
import { AskModel } from '@ask/ask.model';
import { BadRequestError } from '@global/errorHandler.global';
import { IPostDocument } from '@post/post.interfaces';
import { PostModel } from '@post/post.model';
import { CommonFunctions, createCommonService } from '@service/db/common.service';
import { Request, Response, NextFunction } from 'express';


type FeedItem = IAskDocument | IPostDocument;

class feedController {
  /**
     * @desc Get all feed items
     * @route GET /feed/?sort=mostRecent&filterBy=all
     * @access Private/User
     */
  public static async getFeed(req: Request, res: Response, next: NextFunction) {
    try {
      const { sort = 'mostRecent', filterBy = 'all' }: { sort: string, filterBy: string } = req.query as any;

      let asks: IAskDocument[] = [];
      let posts: IPostDocument[] = [];

      if (filterBy === 'all' || filterBy === 'qa' || filterBy === 'ask') {
        asks = await AskModel.find().exec();
      }

      if (filterBy === 'all' || filterBy === 'post') {
        posts = await PostModel.find().exec();
      }

      const combinedFeed: FeedItem[] = [
        ...asks,
        ...posts,
      ];

      // Sort based on the createdAt date
      combinedFeed.sort((a, b) => {
        return sort === 'mostRecent'
          ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      });

      res.status(200).json({
        success: true,
        results: combinedFeed.length,
        data: combinedFeed
      });
    } catch (error) {
      throw new BadRequestError();
    }
  }

}
export default feedController;
