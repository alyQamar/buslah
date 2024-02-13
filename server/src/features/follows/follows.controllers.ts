import { model, Model, Schema, Document, Types } from 'mongoose'; // Importing Mongoose functions
import { ObjectId } from 'mongodb'; // Importing MongoDB's ObjectId
import { Request, Response, NextFunction } from 'express';

import { validateBody } from '@root/shared/decorators/joiValidation.decorator';
import { InternalServerError, NotFoundError, BadRequestError } from '@global/errorHandler.global';

import { followUnfollowValidator, getFollowsValidator } from './follows.validators';
import followsModel from '@follows/follows.model';
import userModel from '@user/user.model';

class followsController {
  @validateBody(followUnfollowValidator)
  public static async follow(req: Request, res: Response, next: NextFunction) {
    try {
      const { userID, followerID } = req.body;

      // Check if user exist
      const user = await userModel.findById(userID);
      const follower = await userModel.findById(followerID);
      if (!user || !follower) {
        return next(new NotFoundError('User not found.'));
      }

      //get followsId of the user and follower
      const followsIdOfUser = user.followsID;
      const followsIdOfFollower = follower.followsID;

      // Add followerId to the followings list of the user
      const updatedUser = await followsModel.findByIdAndUpdate(
        followsIdOfUser,
        { $addToSet: { followings: followerID } },
        { new: true } // Return the updated document
      );

      // add userId to the followers list of the follower
      const updatedFollower = await followsModel.findByIdAndUpdate(
        followsIdOfFollower,
        { $addToSet: { followers: userID } },
        { new: true } // Return the updated document
      );

      if (!updatedUser || !updatedFollower) {
        next(new InternalServerError('Failed to update follows.'));
      }

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('Error in follow function:', error);
      next(new InternalServerError('Internal Server Error.'));
    }
  };

  @validateBody(followUnfollowValidator)
  public static async unFollow(req: Request, res: Response, next: NextFunction) {
    try {
      const { userID, followerID } = req.body;

      // Check if user exist
      const user = await userModel.findById(userID);
      const follower = await userModel.findById(followerID);
      if (!user || !follower) {
        return next(new NotFoundError('User not found.'));
      }

      //get followsId of the user and follower
      const followsIdOfUser = user.followsID;
      const followsIdOfFollower = follower.followsID;

      // remove followerId to the followings list of the user
      const updatedUser = await followsModel.findByIdAndUpdate(
        followsIdOfUser,
        { $pull: { followings: followerID } },
        { new: true } // Return the updated document
      );

      // remove userId to the followers list of the follower
      const updatedFollower = await followsModel.findByIdAndUpdate(
        followsIdOfFollower,
        { $pull: { followers: userID } },
        { new: true } // Return the updated document
      );

      if (!updatedUser || !updatedFollower) {
        next(new InternalServerError('Failed to update follows.'));
      }

      res.status(200).json({ message: 'Success to unfollow this user' });
    } catch (error) {
      console.error('Error in follow function:', error);
      next(new InternalServerError('Internal Server Error.'));
    }
  };

  @validateBody(getFollowsValidator)
  public static async getFollows(req: Request, res: Response, next: NextFunction) {
    try {
      const { userID, type } = req.body;

      // Check if user exist
      const user = await userModel.findById(userID);
      if (!user) {
        return next(new NotFoundError('User not found.'));
      }

      //get followsId of the user and follower
      const followsIdOfUser = user.followsID;
      const follows = await followsModel.findById(followsIdOfUser);
      const followers = follows?.followers;
      const followings = follows?.followings;

      if (type === 'followers') {
        if (!followers || followers.length === 0) {
          return next(new BadRequestError('User has no followers'));
        }

        return res.status(200).json({ message: 'success to get all followers ', Followers: followers });
      } else if (type === 'followings') {
        if (!followings || followings.length === 0) {
          return res.status(200).json({ message: 'User has not follow anyone' });
        }
        return res.status(200).json({ message: 'success to get all followings ', Followings: followings });
      }
    } catch (error) {
      next(new InternalServerError('Internal Server Error.'));
    }
  };
}

export default followsController;
