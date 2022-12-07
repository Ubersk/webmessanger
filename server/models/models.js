const sequelize = require("../db");
const { DataTypes } = require("sequelize");
const { now } = require("sequelize/lib/utils");

const User = sequelize.define("user", {
  id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  img: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.INTEGER },
  isAdmin: { type: DataTypes.BOOLEAN, defaultValue: false },
});

const Mail = sequelize.define("mail", {
  id_mail: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message_title: { type: DataTypes.STRING(155) },
  message_body: { type: DataTypes.TEXT },
  date_create: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});
const Mail_fly = sequelize.define("mail_fly", {
  id_mail_fly: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date_recive: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  date_read: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});
const Mail_folder = sequelize.define("mail_folder", {
  id_mail_folder: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name_mail_folder: { type: DataTypes.STRING, unique: true },
});
