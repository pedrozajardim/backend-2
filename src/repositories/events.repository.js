import DaoEvents from "../dao/events.dao.js"

class EventsRepository{
    constructor(dao = new DaoEvents){
        this.dao = dao
    }

    async getAll(){
        return await this.dao.getAll()
    }

    async created(newEvent){
        return await this.dao.created(newEvent)
    }
}

export default EventsRepository