import Joi, { ObjectSchema } from 'joi';

const signupValidator: ObjectSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(9)
    .required()
    .messages({
      'string.base': 'Username must be of type string',
      'string.min': 'Username should have at least {#limit} characters',
      'string.max': 'Username should have at most {#limit} characters',
      'any.required': 'Username is a required field',
      'string.empty': 'Username is not allowed to be empty'
    }),
  password: Joi.string()
    .min(3)
    .max(9)
    .required()
    .messages({
      'string.base': 'Password must be of type string',
      'string.min': 'Password should have at least {#limit} characters',
      'string.max': 'Password should have at most {#limit} characters',
      'any.required': 'Password is a required field',
      'string.empty': 'Password is not allowed to be empty'
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({
      'any.only': 'Passwords do not match',
      'any.required': 'Confirm Password is a required field',
      'string.empty': 'Confirm Password is not allowed to be empty'
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.base': 'Email must be of type string',
      'string.email': 'Email must be valid',
      'any.required': 'Email is a required field',
      'string.empty': 'Email is not allowed to be empty'
    })
});

export { signupValidator };
