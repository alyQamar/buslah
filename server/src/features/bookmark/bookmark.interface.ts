import mongoose from "mongoose";

export interface IUserBookmark {
  type: string;
  id: mongoose.Types.ObjectId;
};
