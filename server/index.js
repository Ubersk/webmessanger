require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const app = express();
const PORT = process.env.PORT || 5000;
const models = require("./models/models");

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () =>
      console.log(
        "\x1b[40m",
        "\x1b[33m",
        `Сервер запущен на порту \x1b[31m ${PORT}`,
        "\x1b[0m"
      )
    );
  } catch (e) {
    console.log(e);
  }
};
start();
