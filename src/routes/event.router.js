import { Router } from "express";
import EventsController from "../controllers/event.controller.js";

const router = Router()

router.get('/', EventsController.getEvents)

export default router