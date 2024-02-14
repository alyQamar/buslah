import { httpStatusInfo } from '@util/httpStatusInfo';

export interface IError {
  status: string;
  statusCode: number;
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
      statusCode: this.statusCode,
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
      statusCode: this.statusCode,
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
