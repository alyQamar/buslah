import { Request, Response } from 'express';
import { validate } from '@global/middlewares/validationMiddleware';
import { basePostValidator, postNullabilityValidator } from '@post/post.validators';
import { PostModel } from '@post/post.model';
import { createCommonService, commonFunctions } from '@service/db/common.services';
import { IPostDocument } from '@post/post.interfaces';
import { NotFoundError } from '@global/middlewares/errorMiddleware';

const CRUDFunctions: commonFunctions<IPostDocument> = createCommonService<IPostDocument>(PostModel);

export class PostController {

  /**
   * @desc Create a post
   * @route POST /posts/:id
   * @access Private/User
   */
  @validate(basePostValidator.concat(postNullabilityValidator))
  public static async createPost(req: Request, res: Response) {
    try {
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error creating post');
    }
  }
  /**
   * @desc Get a single post by id
   * @route GET/posts/:id
   * @access Private/User
   */
  @validate(basePostValidator)
  public static async getPost(req: Request, res: Response) {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot get a post');
    }
  }
}

