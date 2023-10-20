import mongoose, { Schema, Document } from 'mongoose';

interface User extends Document {
  name: string;
  email: string;
  photo?: string;
  role: 'admin' | 'mentor' | 'mentee';
  password: string;
  passwordConfirm: string;
  passwordChangedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  active: boolean;
}

const userSchema: Schema<User> = new Schema<User>({
  name: {
    type: String,
    required: [true, 'Please tell us your name!']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email!'],
    unique: true,
    lowercase: true
  },
  photo: String,
  role: {
    type: String,
    enum: ['mentee', 'mentor', 'admin'],
    default: 'mentee'
  },
  password: {
    type: String,
    required: [true, 'Please provide a password!'],
    minlength: 8,
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!']
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

const User = mongoose.model<User>('User', userSchema);

module.exports = User;
