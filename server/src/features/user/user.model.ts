import { model, Model, Schema, Document, Types } from 'mongoose'; // Importing Mongoose functions
import { ObjectId } from 'mongodb'; // Importing MongoDB's ObjectId
import { IUserDocument } from '@user/user.interfaces';

// 2- Define a Mongoose schema for the user
const userSchema: Schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    role: {
      type: String,
      enum: ['admin', 'mentor', 'mentee'],
      default: 'mentee'
    },
    photo: { type: String },
    country: { type: String },
    companyWorkingFor: { type: String },
    school: { type: String },
    interests: { type: [String] },
    authID: {
      type: String || ObjectId,
      ref: 'auth'
    }
  },
  {
    timestamps: true
  }
);

// 3) Creating the model from the schema
const UserModel: Model<IUserDocument> = model<IUserDocument>('User', userSchema);

// 4) Exporting the model to use it in other files/modules
export default UserModel;
