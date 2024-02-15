import Joi, { ObjectSchema } from "joi";

// Schema for creating a review with required fields
export const createReviewValidator: ObjectSchema = Joi.object().keys({
  title: Joi.string().max(255).required().messages({
    "string.base": "Title must be of type string",
    "string.max": "Title should have at most {#limit} characters",
    "string.empty": "Title is not allowed to be empty",
    "any.required": "Title is a required field",
  }),
  ratings: Joi.number().integer().min(1).max(5).required().messages({
    "number.base": "Ratings must be a number",
    "number.integer": "Ratings must be an integer",
    "number.min": "Ratings should be at least {#limit}",
    "number.max": "Ratings should be at most {#limit}",
    "any.required": "Ratings is a required field",
  }),
  mentee: Joi.string().required().messages({
    "string.base": "Mentee must be of type string",
    "string.empty": "Mentee is not allowed to be empty",
    "any.required": "Mentee is a required field",
  }),
  mentor: Joi.string().required().messages({
    "string.base": "Mentor must be of type string",
    "string.empty": "Mentor is not allowed to be empty",
    "any.required": "Mentor is a required field",
  })
});

// Schema for updating a review (all fields optional)
export const updateReviewValidator: ObjectSchema = Joi.object().keys({
  title: Joi.string().max(255).optional().messages({
    "string.base": "Title must be of type string",
    "string.max": "Title should have at most {#limit} characters",
    "string.empty": "Title is not allowed to be empty",
  }),
  ratings: Joi.number().integer().min(1).max(5).optional().messages({
    "number.base": "Ratings must be a number",
    "number.integer": "Ratings must be an integer",
    "number.min": "Ratings should be at least {#limit}",
    "number.max": "Ratings should be at most {#limit}",
  }),
  mentee: Joi.string().optional().messages({
    "string.base": "Mentee must be of type string",
    "string.empty": "Mentee is not allowed to be empty",
  }),
  mentor: Joi.string().optional().messages({
    "string.base": "Mentor must be of type string",
    "string.empty": "Mentor is not allowed to be empty",
  })
});
