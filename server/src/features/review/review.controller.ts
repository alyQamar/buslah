
import { NextFunction, Request, Response } from 'express';
import { ReviewModel } from '@review/review.model';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { IReviewDocument } from '@review/review.interface';
import { BadRequestError, ConflictError, NotFoundError } from '@global/errorHandler.global';
import { createReviewValidator, updateReviewValidator } from '@review/review.validator';
import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { validateObjectIdIDParam } from '../../shared/decorators/joiValidation.decorator';
import { ReviewService } from './review.service';


const CRUDFunctions: CommonFunctions<IReviewDocument> = createCommonService<IReviewDocument>(ReviewModel, 'Reviews');

export class ReviewController {

  /**
   * @desc Create a review
   * @route POST /reviews/:id
   * @access Private/User
   */
  @validateBody(createReviewValidator)
  public static async createReview(req: Request, res: Response, next: NextFunction) {
    try {
      await ReviewService.customValidateReview(req, res, next);
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      return next(new NotFoundError());
    }
  }

  /**
   * @desc Get a single review by id
   * @route GET/reviews/:id
   * @access Private/User
   */
  @validateObjectIdIDParam()
  public static async getReview(req: Request, res: Response, next: NextFunction) {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  /**
   * @desc Update a single review by id
   * @route PUT/reviews/:id
   * @access Private/User
   */
  @validateObjectIdIDParam()
  @validateBody(updateReviewValidator)
  public static async updateReview(req: Request, res: Response, next: NextFunction) {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  /**
 * @desc Delete a single review by id
 * @route DELETE/reviews/:id
 * @access Private/User
 */
  @validateObjectIdIDParam()
  public static async deleteReview(req: Request, res: Response, next: NextFunction) {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  /**
   * @desc Get Multiple reviews
   * @route GET/reviews
   * @access Private/User
   */

  public static async getReviews(req: Request, res: Response, next: NextFunction) {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }
}
