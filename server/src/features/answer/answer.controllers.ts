import { Request, Response } from 'express';
import { AnswerModel } from '@answer/answer.model';
import { createCommonService, CommonFunctions } from '@service/db/common.service';
import { IAnswerDocument } from '@answer/answer.interfaces';
import { NotFoundError } from '@global/errorHandler.global';


const CRUDFunctions: CommonFunctions<IAnswerDocument> = createCommonService<IAnswerDocument>(AnswerModel, 'Answers');

export class AnswerController {

  /**
   * @desc Create a answer
   * @route POST /answers/:id
   * @access Private/User
   */
  public static async createAnswer(req: Request, res: Response) {
    try {
      await CRUDFunctions.createOne(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  /**
   * @desc Get a single answer by id
   * @route GET/answers/:id
   * @access Private/User
   */
  public static async getAnswer(req: Request, res: Response) {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  /**
   * @desc Update a single answer by id
   * @route PUT/answers/:id
   * @access Private/User
   */
  public static async updateAnswer(req: Request, res: Response) {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  /**
 * @desc Delete a single answer by id
 * @route DELETE/answers/:id
 * @access Private/User
 */
  public static async deleteAnswer(req: Request, res: Response) {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }

  /**
   * @desc Get Multiple answers
   * @route GET/answers
   * @access Private/User
   */
  public static async getAnswers(req: Request, res: Response) {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError();
    }
  }
}
