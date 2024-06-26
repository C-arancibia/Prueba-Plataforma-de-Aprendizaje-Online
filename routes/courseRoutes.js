const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Rutas de cursos
router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);
router.post('/', courseController.createCourse);

module.exports = router;
