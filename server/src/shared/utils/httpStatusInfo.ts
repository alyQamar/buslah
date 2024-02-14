export interface IErrorInfo {
  type?: string;
  message: string;
}
// start with '4' client side error ---> 'failed'
// start with '5' server side error ---> 'error'
export const httpStatusInfo: Record<string, IErrorInfo> = {
  400: {
    type: 'Bad Request',
    message: 'The server cannot or will not process the request due to an apparent client error.',
  },
  401: {
    type: 'Unauthorized',
    message: 'The request has not been applied because it lacks valid authentication credentials.',
  },
  402: {
    type: 'Payment Required',
    message: 'Reserved for future use; not currently in use.',
  },
  403: {
    type: 'Forbidden',
    message: 'The server understood the request but refuses to authorize it.',
  },
  404: {
    type: 'Not Found',
    message: 'The requested resource could not be found on the server.',
  },
  409: {
    type: 'Conflict',
    message: 'The resource already exists and cannot be created again.',
  },
  413: {
    type: 'Payload Too Large',
    message: 'The server refuses to process a request because the request payload is larger than the server is willing or able to process.',
  },
  415: {
    type: 'Unsupported Media Type',
    message: 'The server refuses to process a request because the request payload is in a format not supported by the target resource.',
  },
  500: {
    type: 'Internal Server Error',
    message: 'The server encountered a situation it doesn\'t know how to handle.',
  },
  503: {
    type: 'Service Unavailable',
    message: 'The server is not ready to handle the request.',
  },
};

