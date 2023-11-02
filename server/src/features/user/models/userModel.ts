import { model, Model, Schema, Document } from 'mongoose'; // Importing Mongoose functions
import { ObjectId } from 'mongodb'; // Importing MongoDB's ObjectId

// 1) Creating user Interface
interface User extends Document {
  _id: string | ObjectId;
  firstName: string;
  lastName: string;
  photo: string;
  country: string;
  companyWorkingFor?: string;
  school?: string;
  interests: string[];
}

// 2- Define a Mongoose schema for the user
const userSchema: Schema = new Schema(
  {
    FirstName: { type: String },
    lastName: { type: String },
    photo: { type: String },
    country: { type: String },
    companyWorkingFor: { type: String },
    school: { type: String },
    interests: { type: [String] }
  },
  {
    timestamps: true
  }
);

// 3) Creating the model from the schema
const UserModel: Model<User> = model<User>('User', userSchema);

// 4) Exporting the model to use it in other files/modules
export default UserModel;
