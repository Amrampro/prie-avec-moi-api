// api/src/modules/meditations/meditation.routes.js
import { Router } from "express";
import { asyncHandler } from "../../utils/async.handler.js";
import { meditationController } from "./meditation.controller.js";

export const meditationRoutes = Router();

meditationRoutes.get("/daily", asyncHandler(meditationController.daily));

// ✅ NEW (place before "/:slug")
meditationRoutes.get("/standalone", asyncHandler(meditationController.standaloneList));

meditationRoutes.get("/:slug", asyncHandler(meditationController.detail));