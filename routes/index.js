const express = require('express');
const router = express.Router();

// Importar rutas específicas
const courseRoutes = require('./courseRoutes');
const userRoutes = require('./userRoutes');

// Rutas principales
router.use('/courses', courseRoutes);
router.use('/users', userRoutes);

module.exports = router;
