import Joi, { ObjectSchema } from 'joi';
import { Feelings } from './post.interfaces';
import { PrivacyOptions } from '@auth/auth.interface';

// Get enum values as an array
const feelingsEnumValues = Object.values(Feelings);
const privacyEnumValues = Object.values(PrivacyOptions);

// Base post validator schema
export const basePostValidator: ObjectSchema = Joi.object().keys({
  user: Joi.string().required(),
  post: Joi.string().optional().allow(null, ''),
  bgColor: Joi.string().optional().allow(null, ''),
  feelings: Joi.string().optional().valid(...feelingsEnumValues).allow(''),
  privacy: Joi.string().optional().valid(...privacyEnumValues).allow(''),
  shares: Joi.number(),
  reactions: Joi.array().items(Joi.object()),
  comments: Joi.array().items(Joi.object()),
  // For Uploaded media middleware------------------------
  // imgId: Joi.string().optional().allow(null, ''),
  // -----------------------------------------------------
});

// Validator for image posts extending from basePostValidator
export const imagePostValidator: ObjectSchema = basePostValidator.keys({
  image: Joi.string().required().messages({
    'any.required': 'Image is a required field',
    'string.empty': 'Image property is not allowed to be empty'
  }),
});

// Conditional validation to allow 'post' , 'image' or both if found
export const postNullabilityValidator: ObjectSchema = Joi.object().keys({
  post: Joi.string().optional().allow(null, ''),
  image: Joi.string().optional().allow(null, ''),
}).or('post', 'image').messages({
  'object.or': 'At least one of "post" or "image" is required in a post',
});

