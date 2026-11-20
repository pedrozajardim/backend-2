import UsersServices from "../services/users.services.js"

const usersService = new UsersServices()

class UsersController{
    static async getUsersController(req,res){
        try {
            const users = await usersService.getUsers()
            res.status(200).json({status:"success", payload:users})
            
        } catch (error) {
            console.log(error)
            res.status(500).json({status:'error', message: error.message})
        }
    }
}

export default UsersController