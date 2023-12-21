import Joi, { ObjectSchema } from 'joi';

export const followUnfollowValidator: ObjectSchema = Joi.object().keys({
  userID: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/).messages({
    'string.pattern.base': 'Invalid user ID format'
  }),
  followerID: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/).messages({
    'string.pattern.base': 'Invalid follower ID format'
  }),
});

export const getFollowsValidator: ObjectSchema = Joi.object().keys({
  userID: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/).messages({
    'string.pattern.base': 'Invalid user ID format'
  }),
  type: Joi.string().valid('followers', 'followings').required(),
});
