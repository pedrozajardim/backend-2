import UsersDao from "../dao/users.dao.js";


class UsersRepository{
    constructor(dao = new UsersDao){
        this.dao = dao
    }


    async created(newUser){
        return await this.dao.created(newUser)
    }

    async findByEmail(email){
        return await this.dao.findByEmail(email)  }
}

export default UsersRepository;