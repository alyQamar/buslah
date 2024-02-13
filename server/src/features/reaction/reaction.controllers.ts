import { Request, Response, NextFunction } from 'express';
// import { config } from '@config/index';
// import { validateBody } from '@global/validationMiddleware';
import { reactionModel } from '@reaction/reaction.model';
import { IReactionDocument } from '@reaction/reaction.interfaces';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { BadRequestError, NotFoundError } from '@global/errorHandler.global';

const CRUDFunctions: CommonFunctions<IReactionDocument> = createCommonService<IReactionDocument>(reactionModel, 'Reactions');

class reactionController {
  public async createReaction(req: Request, res: Response, next: NextFunction) {
    try {
      const { onPost, postID, commentID } = req.body;

      // Checking if postID and commentID exists according to the type of onPost
      if (onPost) {
        if (!postID) {
          return next(new BadRequestError('The reaction must belong to a post.'));
        }
      } else {
        if (!commentID) {
          return next(new BadRequestError('The reaction must belong to a comment.'));
        }
      }

      // checking if the user makes a prev reaction on this post or comment
      const foundPrevReaction = await reactionModel.find({ userID: req.body.userID });
      if (foundPrevReaction) {
        return next(new BadRequestError('Each user can only react once.'));
      }

      // If the body passes all this tests then create a new reaction
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Error Creating reaction.'));
    }
  }

  public async getReaction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the reaction.'));
    }
  }

  public async deleteReaction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the reaction.'));
    }
  }

  public async updateReaction(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find the reaction.'));
    }
  }

  public async getAllReactions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      return next(new NotFoundError('Cannot find any reactions.'));
    }
  }

  public async reactionsOnPost(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const documents = await reactionModel.find({ postID: id });

    if (!documents.length) {
      return next(new NotFoundError('No reactions on this post.'));
    }

    res.status(200).json({ status: 'success', results: documents.length, data: documents });
  }

  public async reactionsOnComment(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params;
    const documents = await reactionModel.find({ commentID: id });

    if (!documents.length) {
      return next(new NotFoundError('No reactions on this comment.'));
    }

    res.status(200).json({ status: 'success', results: documents.length, data: documents });
  }
}

export default reactionController;
