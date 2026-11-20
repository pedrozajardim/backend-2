import mongoose, { Schema,model } from "mongoose"


const EventSchema = new mongoose.Schema(
    {
        title:{ type:String, required:true},
        description:{ type:String,required:true},
        capacity:{type:Number,required:true},
        location:{type:String,required:true},
        date:{type:Date,required:true}
    }
)

export const eventsModel = mongoose.model("Events",EventSchema);