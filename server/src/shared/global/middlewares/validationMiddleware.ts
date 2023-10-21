/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request } from 'express';
import { ObjectSchema } from 'joi';

import { RequestValidationError } from '@global/middlewares/errorMiddleware';

// 1- Define a type for the decorator function
type IJoiDecorator = (target: any, key: string, descriptor: PropertyDescriptor) => void;

// 2- Define the decorator function
export function validate(schema: ObjectSchema): IJoiDecorator {
  // The decorator function takes a validator schema as an argument
  return (_target: any, _key: string, descriptor: PropertyDescriptor) => {
    //2.1- Get the original method
    const originalMethod = descriptor.value;

    //2.2- Replace the original method with an async function
    descriptor.value = async function (...args: any[]) {
      // Extract the request object from the arguments
      const req: Request = args[0];

      // Validate the request body using the provided schema
      const { error } = await Promise.resolve(schema.validate(req.body));

      // If there are validation errors
      if (error?.details) {
        // Throw a custom error with the first error message
        throw new RequestValidationError(error.details[0].message);
      }

      // If validation passes, call the original method and return its result (Do controller logic)
      return originalMethod.apply(this, args);
    };

    // Return the modified descriptor
    return descriptor;
  };
}
