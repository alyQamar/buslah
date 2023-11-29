import Joi, { ObjectSchema } from 'joi';

const signupValidator: ObjectSchema = Joi.object().keys({
  name: Joi.string().min(3).max(15).required().messages({
    'string.base': 'Username must be of type string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is a required field',
    'string.empty': 'Username is not allowed to be empty'
  }),
  password: Joi.string().min(3).max(100).required().messages({
    'string.base': 'Password must be of type string',
    'string.min': 'Password should have at least {#limit} characters',
    'string.max': 'Password should have at most {#limit} characters',
    'any.required': 'Password is a required field',
    'string.empty': 'Password is not allowed to be empty'
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field',
    'string.empty': 'Email is not allowed to be empty'
  })
});

const resetPasswordValidator: ObjectSchema = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field',
    'string.empty': 'Email is not allowed to be empty'
  }),
  password: Joi.string().min(8).max(100).required().messages({
    'string.base': 'Password must be of type string',
    'string.min': 'Password should have at least {#limit} characters',
    'string.max': 'Password should have at most {#limit} characters',
    'any.required': 'Password is a required field',
    'string.empty': 'Password is not allowed to be empty'
  })
});

const checkPasswordResetCodeValidator: ObjectSchema = Joi.object().keys({
  userEmail: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field',
    'string.empty': 'Email is not allowed to be empty'
  }),
  code: Joi.number().required().messages({
    'any.required': 'Code is a required field',
    'string.empty': 'Code is not allowed to be empty'
  })
});

export { signupValidator, resetPasswordValidator, checkPasswordResetCodeValidator };
