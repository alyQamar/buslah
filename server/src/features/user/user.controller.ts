import { Request, Response, NextFunction } from 'express';


import { NotFoundError } from '@global/errorHandler.global';
import { createCommonService, CommonFunctions } from '@service/db/common.service';

import { IUserDocument } from '@user/user.interface';
import { Roles } from '@auth/auth.interface';
import userModel from '@user/user.model';
import UserService from './user.service';
import { IUserAuthRequest } from '@root/shared/interfaces/request.interface';
import UserModel from '@user/user.model';
import AuthService from '@auth/auth.service';
import { ObjectId } from 'mongoose';
import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { updatePasswordValidator } from './user.validator';

const CRUDFunctions: CommonFunctions<IUserDocument> = createCommonService<IUserDocument>(userModel, 'Users');

class userController {
  /**
   * @param req Request
   * @param res Response
   * @param next Function call next middleware
   * @desc  Get specific user by id
   * @route   GET /{URL}/users/:id
   * @access  Private/Admin
   */
  public static async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getOne(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find the user.');
    }
  }


  /**
   * @param req Request
   * @param res Response
   * @param next Function call next middleware
   * @desc  Get list of users
   * @route   GET /{URL}/users
   * @access  Private/Admin
   */
  public static async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await CRUDFunctions.getAll(req, res);
    } catch (error) {
      throw new NotFoundError('Cannot find any users.');
    }
  }

  /**
   * @param req Request
   * @param res Response
   * @param next Function call next middleware
   * @desc  Get list of mentors
   * @route   GET /{URL}/users/mentors
   * @access  Public
   */
  public static async getAllMentors(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const mentorIds = await UserService.getUsersIdsByRole(req, Roles.Mentor);
      await CRUDFunctions.getAllByIds(req, res, mentorIds);
    } catch (error) {
      next(error);
    }
  }

  /**
   * @param req Request
   * @param res Response
   * @param next Function call next middleware
   * @desc  Get logged user data
   * @route   GET /{URL}/users/me
   * @access  Private/Protect
   */
  public static async getLoggedUserData(req: IUserAuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const userData = await UserModel.findOne({ authID: req.userAuth._id });
      if (!userData) {
        throw new NotFoundError();
      }

      res.status(200).json({
        status: 'success',
        data: userData
      });

    } catch (error) {
      next(error);
    }
  }

  /**
   * @param req Request
   * @param res Response
   * @param next Function call next middleware
   * @desc  Update logged user password from payload (req.userAuth)
   * @route PUT /{URL}/users/password
   * @access Private/Protect
   */
  @validateBody(updatePasswordValidator)
  public static async updateLoggedUserPassword(req: IUserAuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      await AuthService.changePassword(req.body.oldPassword, req.body.newPassword, req.userAuth)

      // [x] Generate new token
      const jwtToken = AuthService.createToken(req.userAuth._id as unknown as ObjectId);

      // [x] send new token to cookie
      AuthService.SendTokenViaCookie(jwtToken, req, res);

      res.status(200).json({
        status: 'success',
        data: { token: jwtToken }
      });
    } catch (error) {
      next(error);
    }
  }

  /**
   * @param req Request
   * @param res Response
   * @param next Function call next middleware
   * @desc  Update logged user data
   * @route   PUT /{URL}/users/me
   * @access  Private/Protect
   */
  public static async updateLoggedUserData(req: Request, res: Response, next: NextFunction): Promise<void> {
  }

  /**
 * @param req Request
 * @param res Response
 * @param next Function call next middleware
 * @desc    deactivate logged user
 * @route   PUT /{URL}/users/deactivate
 * @access  Private/Protect
 */
  public static async deactivateLoggedUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  }

  /**
 * @param req Request
 * @param res Response
 * @param next Function call next middleware
 * @desc    Logout
 * @route   DELETE /{URL}/users/logout
 * @access  Private/Protect
 */
  public static async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
  }
}
export default userController;
