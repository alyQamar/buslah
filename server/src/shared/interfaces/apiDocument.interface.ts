import { Document } from "mongoose";

export interface APIDocument extends Document {
  isDeleted?: boolean;
  deletedAt?: Date;
}
