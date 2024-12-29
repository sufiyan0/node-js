const Squelize = require("sequelize");

const sequelize = new Squelize("products", "root","",{
    dialect:"mysql",
    host:"localhost"
})

module.exports = sequelize;
