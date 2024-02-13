import Joi, { ErrorReport } from "joi";

import { ReviewModel } from '@review/review.model';

// Define types for the value and helpers parameters
type CustomValidatorFunction<T> = (value: T, helpers: Joi.CustomHelpers<any>) => T | ErrorReport;

// Custom validator function to check for duplicate reviews
const duplicateReviewValidator: CustomValidatorFunction<any> = async (value, helpers) => {
  const { mentee, mentor } = value;
  try {
    const existingReview = await ReviewModel.findOne({ mentee, mentor });
    if (existingReview) {
      return helpers.error('any.invalid');
    }
    return value;
  } catch (error) {
    console.error('Error checking duplicate review:', error);
    return helpers.error('any.invalid');
  }
};


const createReviewValidator = Joi.object().keys({
  title: Joi.string().max(255).optional().messages({
    'string.base': 'Title must be of type string',
    'string.max': 'Title should have at most {#limit} characters',
    'string.empty': 'Title is not allowed to be empty'
  }),
  ratings: Joi.number().integer().min(1).max(5).required().messages({
    'number.base': 'Ratings must be a number',
    'number.integer': 'Ratings must be an integer',
    'number.min': 'Ratings should be at least {#limit}',
    'number.max': 'Ratings should be at most {#limit}',
    'any.required': 'Ratings is a required field'
  }),
  mentee: Joi.string().required().messages({
    'string.base': 'Mentee must be of type string',
    'any.required': 'Mentee is a required field',
    'string.empty': 'Mentee is not allowed to be empty'
  }),
  mentor: Joi.string().required().messages({
    'string.base': 'Mentor must be of type string',
    'any.required': 'Mentor is a required field',
    'string.empty': 'Mentor is not allowed to be empty'
  }),
}).custom(duplicateReviewValidator, 'duplicate review');

const updateReviewValidator = Joi.object().keys({
  title: Joi.string().max(255).optional().messages({
    'string.base': 'Title must be of type string',
    'string.max': 'Title should have at most {#limit} characters',
    'string.empty': 'Title is not allowed to be empty'
  }),
  ratings: Joi.number().integer().min(1).max(5).optional().messages({
    'number.base': 'Ratings must be a number',
    'number.integer': 'Ratings must be an integer',
    'number.min': 'Ratings should be at least {#limit}',
    'number.max': 'Ratings should be at most {#limit}',
  }),
  mentee: Joi.string().optional().messages({
    'string.base': 'Mentee must be of type string',
    'string.empty': 'Mentee is not allowed to be empty'
  }),
  mentor: Joi.string().optional().messages({
    'string.base': 'Mentor must be of type string',
    'string.empty': 'Mentor is not allowed to be empty'
  }),
}).custom(duplicateReviewValidator, 'duplicate review');

export { createReviewValidator, updateReviewValidator };
