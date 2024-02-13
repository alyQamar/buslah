import { Request, Response } from 'express';
import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { basePostValidator, postNullabilityValidator } from '@post/post.validators';
import { PostModel } from '@post/post.model';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { IPostDocument } from '@post/post.interfaces';
import { NotFoundError } from '@global/errorHandler.global';

const CRUDFunctions: CommonFunctions<IPostDocument> = createCommonService<IPostDocument>(PostModel, 'Posts');

export class PostController {
  /**
   * @desc Create a post
   * @route POST /posts/:id
   * @access Private/User
   */
  @validateBody(basePostValidator.concat(postNullabilityValidator))
  public static async createPost(req: Request, res: Response) {
    try {
      // if (!req.authorID) req.authorID = req.user.id;
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
  public static async getPost(req: Request, res: Response) {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot get a post');
    }
  }

  /**
   * @desc Update a single post by id
   * @route PUT/posts/:id
   * @access Private/User
   */
  @validateBody(basePostValidator)
  public static async updatePost(req: Request, res: Response) {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot update a post');
    }
  }

  /**
   * @desc Delete a single post by id
   * @route DELETE/posts/:id
   * @access Private/User
   */
  public static async deletePost(req: Request, res: Response) {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot delete a post');
    }
  }

  /**
   * @desc Get Multiple posts
   * @route GET/posts
   * @access Private/User
   */
  public static async getPosts(req: Request, res: Response) {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot get posts');
    }
  }
}
