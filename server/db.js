const{Sequelize} = require ('sequelize')
require ('tedious')
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: "mssql",
        port: process.env.DB_PORT,
        dialectOptions: {
                trustedConnection: true,
        },
    }
);
