import { Response, NextFunction } from 'express';

import { IFilterRequest } from '@root/shared/interfaces/request.interface';
import { FilterObject } from '@root/shared/interfaces/db.interface';

export class ReviewService {
  public static createFilterObj(req: IFilterRequest, res: Response, next: NextFunction): void {
    let filterObject: FilterObject = {};
    if (req.params.mentorId) filterObject = { mentor: req.params.mentorId };
    req.filterObj = filterObject;
    next();
  }
}
