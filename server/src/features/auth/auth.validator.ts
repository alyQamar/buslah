import Joi, { ObjectSchema } from 'joi';
import { Roles } from './auth.interface';

const signupValidator = Joi.object().keys({
  username: Joi.string().min(3).max(15).required().messages({
    'string.base': 'Username must be of type string',
    'string.empty': 'Username is not allowed to be empty',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is a required field'
  }),
  password: Joi.string().min(8).max(100).required().messages({
    'string.base': 'Password must be of type string',
    'string.empty': 'Password is not allowed to be empty',
    'string.min': 'Password should have at least {#limit} characters',
    'string.max': 'Password should have at most {#limit} characters',
    'any.required': 'Password is a required field'
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field'
  }),
  role: Joi.string().valid(...Object.values(Roles)).required().messages({
    'string.base': 'Role must be of type string',
    'string.empty': 'Role is not allowed to be empty',
    'any.only': 'Role must be one of: ' + Object.values(Roles).join(', '), // Error message if role is not valid
    'any.required': 'Role is a required field'
  })
});

const LoginValidator = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field'
  }),
  password: Joi.string().min(8).max(100).required().messages({
    'string.base': 'Password must be of type string',
    'string.empty': 'Password is not allowed to be empty',
    'string.min': 'Password should have at least {#limit} characters',
    'string.max': 'Password should have at most {#limit} characters',
    'any.required': 'Password is a required field'
  })
});

const resetPasswordValidator = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field'
  }),
  password: Joi.string().min(8).max(100).required().messages({
    'string.base': 'Password must be of type string',
    'string.empty': 'Password is not allowed to be empty',
    'string.min': 'Password should have at least {#limit} characters',
    'string.max': 'Password should have at most {#limit} characters',
    'any.required': 'Password is a required field'
  })
});

const checkPasswordResetCodeValidator = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field'
  }),
  passwordResetCode: Joi.number().required().messages({
    'number.base': 'Code must be a number',
    'any.required': 'Code is a required field',
    'string.empty': 'Code is not allowed to be empty'
  })
});

const forgotPasswordValidator = Joi.object().keys({
  email: Joi.string().email().required().messages({
    'string.base': 'Email must be of type string',
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be valid',
    'any.required': 'Email is a required field'
  })
});

export {
  signupValidator,
  resetPasswordValidator,
  checkPasswordResetCodeValidator,
  forgotPasswordValidator,
  LoginValidator
};
