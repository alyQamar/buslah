import { Request, Response, NextFunction } from 'express';

import { config } from '@config/index';
import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { NotFoundError } from '@global/errorHandler.global';
import { createCommonService, CommonFunctions } from '@service/db/common.service';

import { IUserDocument } from '@user/user.interfaces';
import { Roles } from '@auth/auth.interfaces';
import userModel from '@user/user.model';
import UserService from './user.service';

const CRUDFunctions: CommonFunctions<IUserDocument> = createCommonService<IUserDocument>(userModel, 'Users');

class userController {

  // @desc    Get specific user by id
  // @route   GET /{URL}/users/:id
  // @access  Private/Admin
  public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the user.');
    }
  }

  // @desc    Delete specific user
  // @route   GET /{URL}/users/:id
  // @access  Private/Admin
  public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.deleteOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the user.');
    }
  }

  // @desc    Get list of users
  // @route   GET /{URL}/users
  // @access  Private/Admin
  public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find any users.');
    }
  }

  // @desc    Get list of mentors
  // @route   GET /{URL}/users/mentors
  // @access  Public
  public async getAllMentors(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const mentorIds = await UserService.getUsersIdsByRole(req, Roles.Mentor);
      await CRUDFunctions.getAllByIds(req, res, mentorIds);
    } catch (error) {
      next(error);
    }
  }

  // [ ] changeUserPassword
  // [ ] getLoggedUserData
  // [ ] updateLoggedUserData
  // @desc    Get list of users
  // @route   GET /{URL}/users
  // @access  Private/User
  public async updateLoggedUserData(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.updateOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find any users.');
    }
  }
  // [ ] deleteLoggedUserData
}
export default userController;
