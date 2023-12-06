import { Request, Response, NextFunction } from 'express';
import { config } from '@config/index';
import { validate } from '@global/middlewares/validationMiddleware';
import { reactionModel } from '@reaction/reaction.model';
import { IReactionDocument } from '@reaction/reaction.interfaces';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { NotFoundError } from '@global/middlewares/errorMiddleware';

const CRUDFunctions: CommonFunctions<IReactionDocument> = createCommonService<IReactionDocument>(reactionModel, 'Reactions');

class reactionController {
  // TODO: handle sending userID, PostID with the req
  public async createReaction(req: Request, res: Response) {
    try {
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      throw new NotFoundError('Error creating reaction.');
    }
  }

  public async getReaction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the reaction.');
    }
  }

  public async deleteReaction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the reaction.');
    }
  }

  public async updateReaction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the reaction.');
    }
  }

  public async getAllReactions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find any reactions.');
    }
  }

  // TODO: getAllReactions using postID
}

export default reactionController;
