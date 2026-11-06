import app from "./app.js";
import { config } from './config/env.config.js'

const PORT = process.env.PORT || 8080

app.listen(config.port, () => {
    console.log(`Servidor en puerto ${config.port}`)
})