const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id_user: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.INTEGER },
  isAdmin: { type: DataTypes.BOOLEAN },
});
const UserInformation = sequelize.define("user_info", {
  id_user_info: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  img: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  phone: { type: DataTypes.STRING },
  computer_number: { type: DataTypes.STRING },
  position: { type: DataTypes.STRING },
});

const Mail = sequelize.define("mail", {
  id_mail: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message_title: { type: DataTypes.STRING(155) },
  message_body: { type: DataTypes.TEXT },
  date_create: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  user_id: { type: DataTypes.INTEGER },
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
  name_mail_folder: { type: DataTypes.STRING },
});

User.hasOne(UserInformation);
UserInformation.belongsTo(User);

User.hasMany(Mail);
Mail.belongsTo(User);

Mail.hasMany(Mail_fly);
Mail_fly.belongsTo(Mail);

Mail_fly.hasMany(User);
User.belongsTo(Mail_fly);

Mail_folder.hasMany(Mail_fly);
Mail_fly.belongsTo(Mail_folder);

module.exports = {
  User,
  Mail,
  UserInformation,
  Mail_folder,
  Mail_fly,
};
