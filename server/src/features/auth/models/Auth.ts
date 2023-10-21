import { hash, compare } from 'bcryptjs';  // Importing password hashing functions
import { model, Model, Schema, Document } from 'mongoose';  // Importing Mongoose functions
import { ObjectId } from 'mongodb';  // Importing MongoDB's ObjectId

export interface IAuthDocument extends Document {
  _id: string | ObjectId;
  uId: string;
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
  passwordResetToken?: string;
  passwordResetExpires?: number | string;
  comparePassword(password: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

class Auth {
  // 1- Define a constant for the number of salt rounds
  private static SALT_ROUND = 10;

  // 2- Define the Mongoose schema for authentication
  private static authSchema: Schema = new Schema(
    {
      username: { type: String },
      uId: { type: String },
      email: { type: String },
      password: { type: String },
      passwordResetToken: { type: String, default: '' },
      passwordResetExpires: { type: Number }
    },
    {
      timestamps: true,
      toJSON: {
        transform(_doc, ret) {
          delete ret.password;  // Removing password field from JSON representation
          return ret;
        }
      }
    }
  );

  // 3- Define the Mongoose model based on the schema
  public static AuthModel: Model<IAuthDocument> = model<IAuthDocument>('Auth', this.authSchema, 'Auth');

  // 4- Hash a password using bcrypt
  public static async hashPassword(password: string): Promise<string> {
    return hash(password, this.SALT_ROUND);
  }

  //5- Compare a password with its hashed version
  public static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return compare(password, hashedPassword);
  }
}

export default Auth;
