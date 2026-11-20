import UsersDao from "../dao/users.dao.js";


class UsersRepository{
    constructor(dao = new UsersDao){
        this.dao = dao
    }

    async getAll(){
        return await this.dao.getAll()
    }
}

export default UsersRepository;