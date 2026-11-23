import mongoose, { Model, Schema } from "mongoose"

const UserSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: {type:String, required:true},
        email: {type:String, required:true, unique:true},
        password: {type:String ,required:true},
        role:{
            type: String,
            enum:["admin","user","organizer"],
            default: "user"
        }
    }
)

export const UserModel = mongoose.model("Users", UserSchema)