import SessionsService from "../services/sessions.service.js"

const sessionsService = new SessionsService()


class SessionsController {


    static async getSessions(req, res) {
        try {
            const sessions = await sessionsService.getSessions()
            res.status(200).json({ status: 'success', payload: sessions })
        } catch (error) {
            console.log(error)
            res.status(500).json({status:"error",message: error.message})
        }
    }

    static async register(req,res){
        try {
            const user = await sessionsService.register(req.body)
            res.status(201).json({status:"success", payload: user})
        } catch (error) {
            console.log(error)
            res.status(error.status || 500).json({status: "error", message: error.message})
        }
    }
}

export default SessionsController

