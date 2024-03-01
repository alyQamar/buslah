import mongoose, { model, Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

import { config } from '@config/index';
import { IAuthDocument, Roles } from '@auth/auth.interface';

const authSchema: Schema<IAuthDocument> = new Schema(
  {
    user: {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: 'User',
      index: true,
    },
    username: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Username is required']
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
      required: [true, 'Email is required']
    },
    role: {
      type: String,
      enum: Roles,
      default: Roles.Mentee
    },
    password: {
      type: String,
      select: false,
      required: [true, 'Password is required']
    },
    passwordResetCode: {
      type: String,
      default: '',
      required: false
    },
    passwordResetExpires: {
      type: Number,
      required: false
    },
    passwordChangedAt: {
      type: Date,
    }
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

  //hash the password with cost  of 10
  this.password = await bcrypt.hash(this.password, 10);

  next();
});

authSchema.methods.comparePassword = async function (candidatePassword: string) {
  return await bcrypt.compare(candidatePassword, this.password);
};

authSchema.methods.createPasswordResetCode = function (): number {
  const passwordResetCode = crypto.randomInt(100001, 999999);

  this.passwordResetCode = crypto
    .createHash('sha256')
    .update(passwordResetCode + '')
    .digest('hex');

  this.passwordResetExpires = Date.now() + Number(config.RESET_PASSWORD_VERIFICATION_CODE_EXPIRE_IN);

  return passwordResetCode;
};

authSchema.methods.checkResetPasswordCode = function (passwordResetCode: string): boolean {
  const hashedCode = crypto.createHash('sha256').update(passwordResetCode).digest('hex');

  return this.passwordResetCode === hashedCode && this.passwordResetExpires > Date.now();
};

const AuthModel: Model<IAuthDocument> = model<IAuthDocument>('Auth', authSchema);

export default AuthModel;
