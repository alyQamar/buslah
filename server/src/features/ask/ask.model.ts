import mongoose, { model, Model, Schema } from 'mongoose';
import { IAskDocument } from '@ask/ask.interface';

const askSchema: Schema = new Schema({
  userID: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Reaction must belong to a user.']
  },
  question: {
    type: String,
    required: [true, 'An ask must have a question']
  },
  locked: {
    type: Boolean,
    default: false
  }
});

export const askModel: Model<IAskDocument> = model<IAskDocument>('Ask', askSchema);
