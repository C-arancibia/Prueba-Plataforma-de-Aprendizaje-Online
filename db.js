const { Sequelize } = require('sequelize');

// Configuración de la conexión a la base de datos PostgreSQL
const sequelize = new Sequelize('plataforma_aprendizaje', 'tu_usuario', 'tu_contraseña', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
