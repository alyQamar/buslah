import { model, Model, Schema, Document } from 'mongoose'; // Importing Mongoose functions
import { ObjectId } from 'mongodb'; // Importing MongoDB's ObjectId
import { Request, Response, NextFunction } from 'express';
import followsModel from '@follows/follows.model';
import userModel from '@user/user.model';

class followsController {
  public static follow = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userID, followerID } = req.body;

      // Check if user exist
      const user = await userModel.findById(userID);
      const follower = await userModel.findById(followerID);
      if (!user || !follower) {
        return res.status(404).json({ error: 'User not found' });
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
        return res.status(500).json({ error: 'Failed to update follows' });
      }

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('Error in follow function:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  public static unfollow = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userID, followerID } = req.body;

      // Check if user exist
      const user = await userModel.findById(userID);
      const follower = await userModel.findById(followerID);
      if (!user || !follower) {
        return res.status(404).json({ error: 'User not found' });
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
        return res.status(500).json({ error: 'Failed to update follows' });
      }

      res.status(200).json({ message: 'Success to unfollow this user' });
    } catch (error) {
      console.error('Error in follow function:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

export default followsController;
