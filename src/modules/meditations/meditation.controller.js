// api/src/modules/meditations/meditation.controller.js
import { meditationService } from "./meditation.service.js";

export const meditationController = {
  async daily(req, res) {
    const result = await meditationService.daily();
    return res.json(result);
  },

  async detail(req, res) {
    const result = await meditationService.detail(req.params.slug);
    return res.json(result);
  },

  // ✅ NEW
  async standaloneList(req, res) {
    const { limit, cursorId, cursorCreatedAt } = req.query;

    const result = await meditationService.standaloneList({
      limit,
      cursorId,
      cursorCreatedAt,
    });

    return res.json(result);
  },
};