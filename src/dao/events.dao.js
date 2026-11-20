import { eventsModel } from "../models/Event.js"

class DaoEvents{

    async getAll(){
        return await eventsModel.find()
    }

    async created (newEvent){
        return await eventsModel.create(newEvent);
    }

}

export default DaoEvents