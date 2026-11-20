import EventsServices from "../services/events.service.js"

const eventsService = new EventsServices();

class EventsController {

    static async getEventsController (req, res){
        try {
            const events = await eventsService.getEvents()
            res.status(200).json({ status: 'success', payload: events })
        } catch (error) {
            console.log(error)
            res.status(500).json({status:'error', message: error.message})
        }
    }

    static async createEventController (req,res){
        try {
            const event = await eventsService.createEvent(req.body)
            res.status(201).json({status:'success', payload:event})
        } catch (error) {
            console.log(error)
            res.status(error.statusCode ||500).json({status:'error', message: error.message})
        }
    }
}

export default EventsController
