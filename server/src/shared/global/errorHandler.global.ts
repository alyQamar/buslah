import { httpStatusInfo } from '@util/httpStatusInfo';

export interface IError {
  status: string;
  statusCode?: number;
  type?: string;
  subType?: string;
  feature?: string;
  message: string;
  stack?: string;
  isOperational?: boolean;
}

export interface IErrorRes extends IError {
  sendErrorForDev(): IError;
  sendErrorForProd(): IError;
}

export abstract class ApiError extends Error implements IErrorRes {
  status: string = 'error';
  statusCode: number = 500;
  type?: string;
  subType?: string;
  feature?: string;
  message: string = 'Internal Server Error';
  stack?: string;
  isOperational?: boolean;

  constructor(
    message: string,
    statusCode: number,
    type?: string,
    subType?: string,
    feature?: string
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.type = httpStatusInfo[this.statusCode]?.type || type;
    this.subType = subType;
    this.feature = feature;
    this.isOperational = true;
    this.status = (this.statusCode.toString().startsWith('4') ? 'failed' : 'error');
  }

  sendErrorForDev(): IError {
    return {
      status: this.status,
      type: this.type,
      subType: this.subType,
      feature: this.feature,
      message: this.message,
      stack: this.stack,
      isOperational: this.isOperational,
    };
  }
  sendErrorForProd(): IError {
    return {
      status: this.status,
      type: this.type,
      message: this.message,
    };
  }
}

export class BadRequestError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[400]?.message, 400);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[401]?.message, 401);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[403]?.message, 403);
  }
}

export class NotFoundError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[404]?.message, 404);
  }
}

export class ConflictError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[409]?.message, 409);
  }
}

export class PayloadTooLargeError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[413]?.message, 413);
  }
}

export class UnsupportedMediaTypeError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[415]?.message, 415);
  }
}

export class InternalServerError extends ApiError {
  constructor(message?: string) {
    super(message || httpStatusInfo[500]?.message, 500);
  }
}
export class ServiceUnavailableError extends ApiError {

  constructor(message?: string) {
    super(message || httpStatusInfo[503]?.message, 503);
  }
}

export class IncorrectEmailOrPassError extends UnauthorizedError {
  constructor(message?: string) {
    super(message || 'Incorrect Email or password.');
    this.subType = 'IncorrectEmailOrPassError';
    this.feature = 'auth';
  }
}
export class IncorrectPasswordError extends UnauthorizedError {
  constructor(message?: string) {
    super(message || 'Incorrect password.');
    this.subType = 'IncorrectPasswordError';
    this.feature = 'auth';
  }
}

export class DatabaseValidationError extends ConflictError {
  constructor(message?: string) {
    super(message || 'Database validation error occurred, please check your request body fields');
    this.subType = 'DatabaseError'
  }
}

export class UserNotAuthenticatedError extends NotFoundError {
  constructor(email: string, message?: string) {
    super(`User with email '${email}' is not authenticated`);
    this.subType = 'UserNotAuthenticated';
    this.feature = 'auth';
  }
}
export class UserNotAuthenticatedOrTimeExpiredError extends NotFoundError {
  constructor(email: string, message?: string) {
    super(`User with email '${email}' is not authenticated or the verification code's time has expired`);
    this.subType = 'UserNotAuthenticated';
    this.feature = 'auth';
  }
}
export class SessionDataNotAvailableError extends InternalServerError {
  constructor(message?: string) {
    super(message || "Session data is not available in the response object");
    this.subType = 'SessionDataNotAvailableError';
    this.feature = 'auth';
  }
}
export class TokenTimeExpiredError extends UnauthorizedError {
  constructor(message?: string) {
    super("Token has expired.");
    this.subType = 'TokenExpired';
    this.feature = 'auth';
  }
}

export class InvalidTokenError extends UnauthorizedError {
  constructor(message?: string) {
    super("Token is invalid.");
    this.subType = 'InvalidToken';
    this.feature = 'auth';
  }
}

export class MissingTokenError extends UnauthorizedError {
  constructor(message?: string) {
    super("Token is missing.");
    this.subType = 'MissingToken';
    this.feature = 'auth';
  }
}
