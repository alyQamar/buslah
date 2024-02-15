import { Response, NextFunction, Request } from 'express';

import { IFilterRequest } from '@root/shared/interfaces/request.interface';
import { FilterObject } from '@root/shared/interfaces/db.interface';
import { ReviewModel } from './review.model';
import { BadRequestError, ConflictError, InternalServerError, NotFoundError } from '@global/errorHandler.global';

export class ReviewService {
  public static createFilterObj(req: IFilterRequest, res: Response, next: NextFunction): void {
    let filterObject: FilterObject = {};
    if (req.params.mentorId) filterObject = { mentor: req.params.mentorId };
    req.filterObj = filterObject;
    next();
  }

  public static async customValidateReview(req: Request, res: Response, next: NextFunction) {
    try {
      const { mentor, mentee } = req.body;
      if (mentor === mentee) {
        return next(new BadRequestError());
      }

      const existingReview = await ReviewModel.findOne({
        mentee: mentee,
        mentor: mentor
      });

      if (existingReview) {
        return next(new ConflictError("Review already exists for this mentee and mentor"));
      }

    } catch (error) {
      return next(new NotFoundError());
    }
  }

}

// check review ownership before update
