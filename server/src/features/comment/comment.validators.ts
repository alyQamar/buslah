import Joi, { ObjectSchema } from 'joi';

// Common error messages
const requiredMessage = (field: string) => `${field} ID is a required field for a comment`;
const emptyStringMessage = (field: string) => `${field} property is not allowed to be empty`;

// Base comment validator schema
export const baseCommentValidator: ObjectSchema = Joi.object({
  comment: Joi.string().allow('').default(''),
  post: Joi.string().required().messages({
    'any.required': requiredMessage('Post'),
    'string.empty': emptyStringMessage('Post'),
  }),
  user: Joi.string().required().messages({
    'any.required': requiredMessage('User'),
    'string.empty': emptyStringMessage('User'),
  }),
});

// Validator for comment with reactions extending from baseCommentValidator
export const reactionCommentValidator: ObjectSchema = baseCommentValidator.keys({
  reactions: Joi.array().items(Joi.string()).default([]),
});

// Conditional validation for comment properties
export const commentNullabilityValidator: ObjectSchema = Joi.object({
  comment: Joi.string().allow('').optional(),
  post: Joi.string().required(),
  user: Joi.string().required(),
});

// Validator for the entire comment, including reactions and nullability
export const fullCommentValidator: ObjectSchema = baseCommentValidator.keys({
  reactions: Joi.array().items(Joi.string()).default([]),
}).concat(commentNullabilityValidator);
