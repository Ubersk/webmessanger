const { Sequelize } = require("sequelize");

// Удалите require("tedious"); - он больше не нужен

module.exports = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres", // Измените диалект
    port: process.env.DB_PORT,
    // Удалите MSSQL-специфичные параметры
    dialectOptions: {
      // Дополнительные опции PostgreSQL при необходимости
    },
    // Добавьте параметры пула соединений
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);