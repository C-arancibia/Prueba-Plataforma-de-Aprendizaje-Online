const express = require('express');
const router = express.Router();
// Importar controladores necesarios
const userController = require('../controllers/userController');

// Rutas de usuarios
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);

module.exports = router;
