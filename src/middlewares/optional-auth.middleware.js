// api/src/middlewares/optional-auth.middleware.js
import { authMiddleware } from "./auth.middleware.js";

/**
 * Si token présent et valide => req.user rempli
 * Si token absent / invalide => on continue sans erreur
 */
export async function optionalAuthMiddleware(req, res, next) {
  const hasAuthHeader = Boolean(req.headers.authorization);

  if (!hasAuthHeader) return next();

  try {
    // on réutilise ta logique existante
    return authMiddleware(req, res, next);
  } catch (e) {
    return next(); // pas de 401, juste "non connecté"
  }
}
