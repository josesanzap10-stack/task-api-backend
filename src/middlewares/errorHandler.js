function errorHandler(err, req, res, next) {
  console.error("🔥 Error capturado:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack
  });
}

module.exports = errorHandler;
