import { Request } from 'express';
export interface IFilterRequest extends Request {
  filterObj?: any;
}
