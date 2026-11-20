import { UserModel } from "../models/User.js";

class UsersDao{

    async getAll(){
        return await UserModel.find()
    }
}

export default UsersDao;