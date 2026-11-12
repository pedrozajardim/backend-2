import app from "./app.js";
import { config } from './config/env.config.js'
import { connectDb } from "./config/db.config.js";

await connectDb()

app.listen(config.port, () => {
    console.log(`Servidor en puerto ${config.port}`)
})