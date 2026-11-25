import EventsServices from "../services/events.service.js"

const eventsService = new EventsServices();

class EventsController {

    static async getEventsController (req, res,next){
        try {
            const events = await eventsService.getEvents()
            res.status(200).json({ status: 'success', payload: events })
        } catch (error) {
            next(error)
        }
    }

    static async createEventController (req,res,next){
        try {
            const event = await eventsService.createEvent(req.body)
            res.status(201).json({status:'success', payload:event})
        } catch (error) {
            next(error)
        }
    }
}

export default EventsController
