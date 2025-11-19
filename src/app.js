const express = require("express");

const homeRoutes = require("./routes/index");
const infoRoutes = require("./routes/infoRoutes");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const errorHandler = require("./middlewares/errorHandler");
const notFound = require("./middlewares/notFound");
const logger = require("./middlewares/logger");

const app = express();

app.use(express.json());
app.use(logger);

// Rutas API
app.use("/", homeRoutes);
app.use("/api/v1/info", infoRoutes);
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/auth", authRoutes);

// Middleware 404
app.use(notFound);

// Manejo de errores
app.use(errorHandler);

module.exports = app;
