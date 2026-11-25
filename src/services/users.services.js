import UsersRepository from "../repositories/users.repository.js";
import { createdError } from "../utils/createdError.js";

class UsersServices{
    constructor(repository= new UsersRepository){
        this.repository = repository
    }

    async getUsers(){

        const users = await this.repository.getAll()

        if(users.length === 0){
            throw createdError("No hay usuarios hasta el momento",404)
        }

        return users
    }
}

export default UsersServices;