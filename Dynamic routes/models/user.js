const Squelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user",{
    id:{
        type: Squelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Squelize.STRING,
        allowNull:false,
    },
    
    email:{
        type: Squelize.STRING,
        allowNull:false
    },

})

module.exports = User