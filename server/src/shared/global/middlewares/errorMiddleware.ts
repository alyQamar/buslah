import HTTP_STATUS from 'http-status-codes';


export interface IError {
    statusCode: number;
    status: string;
    message: string;
}

export interface IErrorRes {
    statusCode: number;
    status: string;
    message: string;

    serialErrors(): IError;

}

export abstract class ApiError extends Error {
    abstract statusCode: number;
    abstract status: string;
    constructor(message: string) { super(message); }

    serialErrors(): IError {
        return {
            statusCode: this.statusCode,
            status: this.status,
            message: this.message
        }
    };
}


export class NotFoundError extends ApiError {
    statusCode = HTTP_STATUS.NOT_FOUND;
    status = 'error';
    constructor(message: string) {
        super(message);
    }
}
export class ValidationError extends ApiError {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';
    constructor(message: string) {
        super(message);
    }
}

export class BadRequestError extends ApiError {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';
    constructor(message: string) {
        super(message);
    }
}
export class NotAuthError extends ApiError {
    statusCode = HTTP_STATUS.UNAUTHORIZED;
    status = 'error';
    constructor(message: string) {
        super(message);
    }
}
export class ServerError extends ApiError {
    statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE;
    status = 'error';
    constructor(message: string) {
        super(message);
    }
}
export class FileOverflowError extends ApiError {
    statusCode = HTTP_STATUS.REQUEST_TOO_LONG;
    status = 'error';
    constructor(message: string) {
        super(message);
    }
}
