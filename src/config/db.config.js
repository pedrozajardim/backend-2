import dns from "node:dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);
import mongoose from "mongoose";
import  {config}  from "./env.config.js";

export const connectDb = async () => {
    try {
        await mongoose.connect(config.mongo_url)
        console.log("Conectado a Mongodb")
    } catch (error) {
        console.error("Error al conectar con Mongodb", error.message)
    }
}