import AuthModel from "@auth/auth.model";
import UserModel from '@user/user.model';
import { Roles } from "@auth/auth.interfaces";
import { NotFoundError } from "@global/errorHandler.global";
import { IFilterRequest } from "@root/shared/interfaces/request.interface";
import QueryServices from "@service/db/query.service";

class UserService {

  // *! Deprecated Method (refactored)
  // public static async getUsersByRole(req: IFilterRequest, role: Roles) {
  //   try {
  //     // [x] Fetch authentication documents for the given role
  //     const authDocuments = await AuthModel.find({ role });

  //     // [x] Extract user ids from the authentication documents
  //     const userIds = authDocuments.map(auth => auth.user);

  //     // [x] Fetch users based on the extracted user ids
  //     const users = await UserModel.find({ _id: { $in: userIds } });

  //     // [x] Apply additional filtering if specified in the request
  //     let filter = { isDeleted: { $ne: true } };

  //     // [x] Build and execute the query using QueryServices
  //     const documentCnt = users.length;
  //     const apiFeatures = new QueryServices(UserModel.find({ ...filter, _id: { $in: userIds } }), req.query)
  //       .paginate(documentCnt)
  //       .filter()
  //       .search('Users')
  //       .limitFields()
  //       .sort();

  //     const { mongooseQuery, paginationResult } = apiFeatures;
  //     const documents = await mongooseQuery.exec();

  //     return { status: 'success', results: documents.length, paginationResult, data: documents };
  //   } catch (error) {
  //     throw new NotFoundError();
  //   }
  // }

  public static async getUsersIdsByRole(req: IFilterRequest, role: Roles) {
    // [x] Fetch authentication documents for the given role
    const authDocuments = await AuthModel.find({ role });

    if (!authDocuments) {
      throw new NotFoundError();
    }

    // [x] return extracted user ids from the authentication documents
    return authDocuments.map(auth => auth.user);
  }

}

export default UserService;
