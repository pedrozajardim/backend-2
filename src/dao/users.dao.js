import { UserModel } from "../models/User.js";

class UsersDao{

    async created(newUser){
        return await UserModel.create(newUser)
    }

    async findByEmail(email){
        return await UserModel.findOne({email})
    }
}

export default UsersDao;