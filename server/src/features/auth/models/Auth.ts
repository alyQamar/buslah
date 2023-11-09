import bcrypt, { hash } from 'bcryptjs'; // Importing password hashing functions
import crypto from 'crypto';
import { model, Model, Schema, Document } from 'mongoose'; // Importing Mongoose functions
import { ObjectId } from 'mongodb'; // Importing MongoDB's ObjectId

export interface IAuthDocument extends Document {
  _id: string | ObjectId;
  uId: string;
  name: string;
  email: string;
  password: string;
  passwordResetCode?: number;
  passwordResetExpires?: number | string;
  comparePassword(candidatePassword: string): Promise<boolean>;
  createPasswordResetToken(): string;
}

// 2- Define the Mongoose schema for authentication
const authSchema: Schema = new Schema<IAuthDocument>(
  {
    name: { type: String, required: true },
    uId: { type: String },
    email: { type: String, unique: true, lowercase: true, required: true },
    password: { type: String, select: false, required: true },
    passwordResetCode: { type: String, default: '' },
    passwordResetExpires: { type: Number }
  },
  {
    timestamps: true,
    toJSON: {
      transform(_doc, ret) {
        delete ret.password; // Removing password field from JSON representation
        return ret;
      }
    }
  }
);

authSchema.pre('save', async function (next) {
  //runs only this function if the password is actually modified
  if (!this.isModified('password')) return next();

  //hash the password with cost  of 12
  this.password = await hash(this.password, 10);

  next();
});

authSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

authSchema.methods.createPasswordResetToken = function (): number {
  const passwordResetCode = crypto.randomInt(100001, 999999);

  this.passwordResetCode = crypto
    .createHash('sha256')
    .update(passwordResetCode + '')
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return passwordResetCode;
};

const AuthModel: Model<IAuthDocument> = model<IAuthDocument>('Auth', authSchema);

export default AuthModel;
