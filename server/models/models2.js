const sequelize = require("../db");
const {DataTypes} = require("sequelize")

const User = sequelize.define("user",
{
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING},
    fio: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    phone_number: {type: DataTypes.STRING},
    computer_number: {type: DataTypes.STRING},
    department: {type: DataTypes.STRING},
    position: {type: DataTypes.STRING},
});

const Department = sequelize.define("department",
{
    id_department: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    deparment_name: {type: DataTypes.STRING},
});

const Position = sequelize.define("position",
{
    id_position: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    position_name: {type: DataTypes.STRING},
});

const Message = sequelize.define("message",
{
    id_message: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    message_title: {type: DataTypes.STRING(155)},
    message_body: {type: DataTypes.TEXT},
    files_body: {type: DataTypes.STRING},
    user_otpravitel: {type: DataTypes.INTEGER},
    user_poluchatel: {type: DataTypes.INTEGER},
    date_create: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},

});