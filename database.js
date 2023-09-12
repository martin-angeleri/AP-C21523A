const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const dbName = process.env.DB_NAME;
// Instancia de conexión a la base de datos

const sequelize = new Sequelize(dbName, 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    sequelize,
    Sequelize,
    DataTypes,
    dbName
}
