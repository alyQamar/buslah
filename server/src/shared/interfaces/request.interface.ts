import { Request } from 'express';
export interface IFilterRequest extends Request {
  filterObj?: any;
}

export interface IUserAuthRequest extends Request {
  userAuth?: any;
}
