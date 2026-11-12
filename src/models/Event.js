import mongoose, { Schema,model } from "mongoose"


const EventSchema = new mongoose.Schema(
    {
        title:{ type:String, require:true},
        descripcion:{ type:String,require:true},
        capacity:{type:Number,require:true},
        location:{type:String,require:true},
        date:{type:Date,require:true}
    }
)

export const eventsModel = mongoose.model("Events",EventSchema);