import EventsServices from "../services/events.service.js"

const eventsService = new EventsServices();

class EventsController {

    static async getEvents (req, res){
        try {
            const events = await eventsService.getEvents(req.body)
            res.status(200).json({ status: 'success', payload: events })
        } catch (error) {
            console.log(error)
            res.status(500)
        }
    }
}

export default EventsController
