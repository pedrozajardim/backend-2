import EventsRepository from "../repositories/events.repository.js"
import { createdError } from "../utils/createdError.js"

class EventsServices {
    constructor(repository = new EventsRepository) {
        this.repository = repository
    }

    async getEvents() {

        const events = await this.repository.getAll()

        if(events.length === 0){
            throw createdError("Hasta el momento no hay ningún evento creado",404)
        }

        return events
    }

    async createEvent(newEvent) {

        const { title, description, capacity, location, date } = newEvent;

        if (!title || !description || !capacity || !location || !date) {
            throw createdError("Todos los campos son obligatorios",400)
        }

        return await this.repository.created(newEvent)
    }
}

export default EventsServices