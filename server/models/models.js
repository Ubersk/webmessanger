const sequelize = require("../db");
const {DataTypes} = require("sequelize")

const User = sequelize.define("user",
{
    id_user: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    photo: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    is_admin: {type: DataTypes.BOOLEAN},
    description: {type: DataTypes.STRING},
    phone_number: {type: DataTypes.STRING},
    computer_number: {type: DataTypes.STRING},
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
    user_creator: {type: DataTypes.INTEGER},
    msg_type: {type: DataTypes.BOOLEAN},
    date_create: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
});


const Poluchateli = sequelize.define("poluchateli",
{
    id_poluchateli: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement: true},
    date_poluchenia: {type: DataTypes.DATE},
    date_prochtenia: {type: DataTypes.DATE},
    date_delete: {type: DataTypes.DATE},
    date_accept: {type: DataTypes.DATE},
    date_unaccept: {type: DataTypes.DATE},
});

User.hasOne(Department);
Department.belongsTo(User);

User.hasOne(Position);
Position.belongsTo(User);

User.hasMany(Message);
Message.belongsTo(User);

Message.hasMany(Poluchateli);
Poluchateli.belongsTo(Message);

User.hasMany(Poluchateli);
Poluchateli.belongsTo(User);

module.exports = {
    User,
    Department,
    Position,
    Message,
    Poluchateli,
};