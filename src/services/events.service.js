import EventsRepository from "../repositories/events.repository.js"

class EventsServices {
    constructor(repository = new EventsRepository) {
        this.repository = repository
    }

    async getEvents() {

        const events = await this.repository.getAll()

        if(events.length === 0){
            throw new Error("Hasta el momento no hay ningún evento creado")
        }

        return events
    }

    async createEvent(newEvent) {

        const { title, description, capacity, location, date } = newEvent;

        if (!title || !description || !capacity || !location || !date) {
            const error = new Error("Todos los campos son obligatorios")
            error.statusCode = 400
            throw error;
        }

        return await this.repository.created(newEvent)
    }
}

export default EventsServices