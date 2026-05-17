// api/src/middlewares/error.middleware.js
export function errorMiddleware(err, req, res, next) {
  console.error(err);

  const status = err.statusCode ?? 500;
  res.status(status).json({
    message: err.message ?? "Server error",
  });
}
