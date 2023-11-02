import Joi, { ObjectSchema } from 'joi';

// Base post validator schema
export const basePostValidator: ObjectSchema = Joi.object().keys({
  post: Joi.string().optional().allow(null, ''),
  bgColor: Joi.string().optional().allow(null, ''),
  privacy: Joi.string().optional().allow(null, ''),
  feelings: Joi.string().optional().allow(null, ''),
  profilePicture: Joi.string().optional().allow(null, ''),
  // For Uploaded media middleware------------------------
  imgId: Joi.string().optional().allow(null, ''),
  // -----------------------------------------------------
});

// Validator for image posts extending from basePostValidator
export const imagePostValidator: ObjectSchema = basePostValidator.keys({
  image: Joi.string().required().messages({
    'any.required': 'Image is a required field',
    'string.empty': 'Image property is not allowed to be empty'
  }),
});


