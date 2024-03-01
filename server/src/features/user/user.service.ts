import AuthModel from "@auth/auth.model";
import UserModel from '@user/user.model';
import { Roles } from "@auth/auth.interface";
import { NotFoundError } from "@global/errorHandler.global";
import { IFilterRequest } from "@root/shared/interfaces/request.interface";
import QueryServices from "@service/db/query.service";

class UserService {

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
