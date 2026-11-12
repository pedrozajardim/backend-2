import EventsRepository from "../repositories/events.repository.js"

class EventsServices {
    constructor(repository = new EventsRepository){
        this.repository = repository
    }

        async getEvents(){
            return await this.repository.getAll()
    }

    async createEvent(newEvent){
        return await this.repository.created(newEvent)
    }
}

export default EventsServices