import { Request } from 'express';
import Joi, { ObjectSchema } from 'joi';

import { BadRequestError } from '@global/errorHandler.global';

// Define a type for the decorator function
type IJoiDecorator = (target: any, key: string, descriptor: PropertyDescriptor) => void;

// Define default schema for id parameter
const defaultParamsSchema = Joi.object({
  id: Joi.string().required().pattern(/^[0-9a-fA-F]{24}$/).messages({
    'string.pattern.base': `{#label} must be a valid user ID`
  })
});

// Define the decorator function for validating the request body
export function validateBody(schema: ObjectSchema): IJoiDecorator {
  return validate(schema, 'body');
}

// Define the decorator function for validating the request params
export function validateParams(schema: ObjectSchema): IJoiDecorator {
  return validate(schema, 'params');
}

export function validateObjectIdIDParam(): IJoiDecorator {
  return validate(defaultParamsSchema, 'params');
}

// Define the shared validate function
function validate(schema: ObjectSchema, location: 'body' | 'params'): IJoiDecorator {
  // The decorator function takes a validator schema and location as arguments
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    // Get the original method
    const originalMethod = descriptor.value;

    // Replace the original method with an async function
    descriptor.value = async function (...args: any[]) {
      // Extract the request object from the arguments
      const req: Request = args[0];

      // Determine which part of the request to validate based on the 'location' parameter
      const dataToValidate = location === 'body' ? req.body : req.params;

      // Validate the request object using the provided schema
      const { error } = await Promise.resolve(schema.validate(dataToValidate));

      // If there are validation errors
      if (error?.details) {
        // Throw a custom error with the first error message
        throw new BadRequestError(error.details[0].message);
      }

      // Call the original method and return its result (Do controller logic)
      return originalMethod.apply(this, args);
    };

    // Return the modified descriptor
    return descriptor;
  };
}
