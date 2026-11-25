import UsersServices from "../services/users.services.js"

const usersService = new UsersServices()

class UsersController{
    static async getUsersController(req,res,next){
        try {
            const users = await usersService.getUsers()
            res.status(200).json({status:"success", payload:users})
            
        } catch (error) {
            next(error)
        }
    }
}

export default UsersController