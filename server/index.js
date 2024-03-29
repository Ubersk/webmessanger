require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const app = express();
const PORT = process.env.PORT || 5000;
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler);
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
