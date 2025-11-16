const express = require('express');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');
const infoRoutes = require('./routes/infoRoutes');
const taskRoutes = require('./routes/taskRoutes');



const app = express();

app.use(express.json());

// Logger primero
app.use(logger);

// Rutas
app.use('/', routes);
app.use('/api/v1/info', infoRoutes);
app.use('/api/v1/tasks', taskRoutes);



// Manejo de errores
app.use(errorHandler);

module.exports = app;
