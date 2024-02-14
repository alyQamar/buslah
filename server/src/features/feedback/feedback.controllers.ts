import { Request, Response, NextFunction } from 'express';
import { FeedbackModel } from '@feedback/feedback.model';
import { IFeedbackDocument } from '@feedback/feedback.interfaces';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { BadRequestError, NotFoundError } from '@global/errorHandler.global';

const CRUDFunctions: CommonFunctions<IFeedbackDocument> = createCommonService<IFeedbackDocument>(FeedbackModel, 'Feedbacks');

class feedbackController {
  public async createFeedback(req: Request, res: Response, next: NextFunction) {
    try {
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      return next(new BadRequestError(`${error}`));
    }
  }
  public async getFeedback(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the feedback.'));
    }
  }
  public async deleteFeedback(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the feedback.'));
    }
  }
  public async updateFeedback(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the feedback.'));
    }
  }
  public async getAllFeedbacks(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find any feedback.'));
    }
  }
}

export default feedbackController;
