const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Area = sequelize.define('Area', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Area;
