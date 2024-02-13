import { Request, Response } from 'express';
import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { CommentModel } from '@comment/comment.model';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { ICommentDocument } from '@comment/comment.interfaces';
import { NotFoundError } from '@global/errorHandler.global';
import { baseCommentValidator } from './comment.validators';

const CRUDFunctions: CommonFunctions<ICommentDocument> = createCommonService<ICommentDocument>(CommentModel, 'Comments');

export class CommentController {

  /**
   * @desc Create a comment
   * @route POST /comments/:id
   * @access Private/User
   */
  @validateBody(baseCommentValidator)
  public static async createComment(req: Request, res: Response) {
    try {
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error creating comment');
    }
  }

  /**
   * @desc Get a single comment by id
   * @route GET/comments/:id
   * @access Private/User
   */
  public static async getComment(req: Request, res: Response) {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot get a comment');
    }
  }

  /**
   * @desc Update a single comment by id
   * @route PUT/comments/:id
   * @access Private/User
   */
  public static async updateComment(req: Request, res: Response) {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot update a comment');
    }
  }

  /**
 * @desc Delete a single comment by id
 * @route DELETE/comments/:id
 * @access Private/User
 */
  public static async deleteComment(req: Request, res: Response) {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot delete a comment');
    }
  }

  /**
   * @desc Get Multiple comments
   * @route GET/comments
   * @access Private/User
   */
  public static async getComments(req: Request, res: Response) {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError('Error cannot get comments');
    }
  }
}
