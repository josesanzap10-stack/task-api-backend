const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Ruta raíz
router.get('/', homeController.home);

// (eliminamos las rutas antiguas que llamaban funciones que YA NO existen)

module.exports = router;
