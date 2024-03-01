import { model, Model, Schema, Document } from 'mongoose'; // Importing Mongoose functions
import { ObjectId } from 'mongodb'; // Importing MongoDB's ObjectId
import { config } from '@config/index';
import { IFollowsDocument } from './follows.interface';
import { IUserDocument } from '@user/user.interface';

// Define the Mongoose schema for follows
const followsSchema: Schema = new Schema<IFollowsDocument>({
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  followings: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

const followsModel: Model<IFollowsDocument> = model<IFollowsDocument>('Follows', followsSchema);

export default followsModel;
