import Joi, { ObjectSchema } from 'joi';


const updatePasswordValidator = Joi.object().keys({
  oldPassword: Joi.string().min(8).max(100).required().messages({
    'string.base': 'Password must be of type string',
    'string.empty': 'Password is not allowed to be empty',
    'string.min': 'Password should have at least {#limit} characters',
    'string.max': 'Password should have at most {#limit} characters',
    'any.required': 'Password is a required field'
  }),
  newPassword: Joi.string().min(8).max(100).required().messages({
    'string.base': 'Password must be of type string',
    'string.empty': 'Password is not allowed to be empty',
    'string.min': 'Password should have at least {#limit} characters',
    'string.max': 'Password should have at most {#limit} characters',
    'any.required': 'Password is a required field'
  }),
});

export {
  updatePasswordValidator
};
