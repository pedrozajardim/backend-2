import mongoose from "mongoose";
import  {config}  from "./env.config.js";

export const connectDb = async () => {
    try {
        await mongoose.connect(config.mongo_url)
        return
        console.log("Conectado a Mongodb")
    } catch (error) {
        console.error("Error al conectar con Mongodb", error.message)
    }
}