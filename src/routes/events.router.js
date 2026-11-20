import { Router } from "express";
import EventsController from "../controllers/event.controller.js";

const router = Router()

router.get('/', EventsController.getEventsController)
router.post('/', EventsController.createEventController)

export default router