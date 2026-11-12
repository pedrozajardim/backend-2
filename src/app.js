import express from "express"
import eventsRouter from "./routes/event.router.js"
import sessionsRouter from "./routes/sessions.router.js"

const app = express()

app.use(express.json())
app.use('/api/events', eventsRouter)
app.use('/api/sessions', sessionsRouter)

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Servidor activo' })
})

export default app