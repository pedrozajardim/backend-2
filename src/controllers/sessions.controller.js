import SessionsService from "../services/sessions.service.js"

const sessionsService = new SessionsService()


class SessionsController {


    static async getSessions(req, res,next) {
        try {
            const sessions = await sessionsService.getSessions()
            res.status(200).json({ status: 'success', payload: sessions })
        } catch (error) {
            next(error)
        }
    }

    static async register(req,res,next){
        try {
            const user = await sessionsService.register(req.body)
            res.status(201).json({status:"success", payload: user})
        } catch (error) {
            next(error)
        }
    }
}

export default SessionsController

