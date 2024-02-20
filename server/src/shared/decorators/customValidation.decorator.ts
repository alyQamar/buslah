import { NextFunction, Request, Response } from 'express';
import { BadRequestError, ConflictError, DatabaseValidationError, NotFoundError } from '@global/errorHandler.global';

// Higher-order function for creating generic validators
function createValidator(validateFn: (req: Request) => Promise<void>): MethodDecorator {
  return function (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
      try {
        await validateFn(req);
        await originalMethod.apply(this, [req, res, next]);
      } catch (error) {
        next(error); // Pass error to the error handling middleware
      }
    };
  };
}


// Check if the value already exists in the database, if it does, return a DatabaseError
export function checkNotExists(Model: any, key: string) {
  return createValidator(async (req: Request) => {
    const existingEntity = await Model.findOne({ [key]: req.body[key] });
    if (existingEntity) {
      throw new DatabaseValidationError(`${Model.modelName} with ${key} '${req.body[key]}' already exists`);
    }
  });
}

// check if value field in request body already exists in database
export function checkExists(Model: any, key: string) {
  return createValidator(async (req: Request) => {
    const existingEntity = await Model.findOne({ [key]: req.body[key] });
    if (!existingEntity) {
      throw new DatabaseValidationError(`${Model.modelName} with ${key} '${req.body[key]}' not exists`);
    }
  });
}


// // Validator for checking ownership before update or delete
// function checkOwnershipBeforeUpdateOrDelete(model: any, paramName: string, exemptRoles: string[] = []) {
//   return createValidator(async (req: Request) => {
//     const { id } = req.params;
//     const document = await model.findOne({ _id: id });
//     if (!document) {
//       throw new NotFoundError(`Document with ID ${id} not found.`);
//     }

//     // Check if user has one of the exempted roles
//     const userRole = req.user.role; // Assuming role is stored in the user object
//     if (exemptRoles.includes(userRole)) {
//       return; // Bypass ownership check for exempted roles
//     }

//     // Perform ownership check
//     if (document.user.toString() !== req.user._id.toString()) {
//       throw new BadRequestError('User is not authorized to perform this action.');
//     }
//   });
// }

// // Validator for ensuring one-to-many uniqueness
// function ensureOneToManyUnique(model: any, fieldNames: string[]) {
//   return createValidator(async (req: Request) => {
//     const filter: Record<string, any> = {};
//     for (const fieldName of fieldNames) {
//       filter[fieldName] = req.body[fieldName];
//     }
//     const existingDocument = await model.findOne(filter);
//     if (existingDocument) {
//       const fieldNamesString = fieldNames.join(' and ');
//       throw new ConflictError(`Document already exists with the given ${fieldNamesString}`);
//     }
//   });
// }

// // Validator for checking inequality
// function checkInequality(param1: string, param2: string) {
//   return createValidator(async (req: Request) => {
//     const { [param1]: value1, [param2]: value2 } = req.body;
//     if (value1 === value2) {
//       throw new BadRequestError(`Values of ${param1} and ${param2} must be different.`);
//     }
//   });
// }


