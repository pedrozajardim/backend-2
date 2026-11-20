import UsersRepository from "../repositories/users.repository.js";

class UsersServices{
    constructor(repository= new UsersRepository){
        this.repository = repository
    }

    async getUsers(){

        const users = await this.repository.getAll()

        if(users.length === 0){
            throw new Error ("No hay usuarios hasta el momento")
        }

        return users
    }
}

export default UsersServices;