const { Course, Area } = require('../models');

// Controlador para obtener todos los cursos
async function getAllCourses(req, res) {
  try {
    const courses = await Course.findAll({
      include: [Area] // Incluir el área asociada al curso
    });
    res.json(courses);
  } catch (error) {
    console.error('Error al obtener cursos:', error);
    res.status(500).json({ error: 'Error al obtener cursos.' });
  }
}

// Controlador para crear un nuevo curso
async function createCourse(req, res) {
  const { name, description, startDate, endDate, coverUrl, areaId } = req.body;
  
  try {
    const newCourse = await Course.create({
      name,
      description,
      startDate,
      endDate,
      coverUrl,
      AreaId: areaId // Asignar el área al curso usando el ID del área
    });

    res.status(201).json(newCourse);
  } catch (error) {
    console.error('Error al crear curso:', error);
    res.status(500).json({ error: 'Error al crear curso.' });
  }
}

module.exports = {
  getAllCourses,
  createCourse
};
