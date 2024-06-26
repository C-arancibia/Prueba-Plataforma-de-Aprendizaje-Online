const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Area = require('./area');

const Course = sequelize.define('Course', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    startDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    coverUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Course.belongsTo(Area, {
    foreignKey: {
        allowNull: false
    }
}); // Establece la relación entre Curso y Área

module.exports = Course;

