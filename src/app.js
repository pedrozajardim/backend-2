import express from "express"
import eventsRouter from "./routes/events.router.js"
import sessionsRouter from "./routes/sessions.router.js"
import usersRouter from "./routes/users.router.js"
import { errorHandler } from "./middlewares/middlewares.js"

const app = express()

app.use(express.json())
app.use('/api/events', eventsRouter)
app.use('/api/sessions', sessionsRouter)
app.use('/api/users', usersRouter)
app.use(errorHandler)

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor activo' })
})



export default app