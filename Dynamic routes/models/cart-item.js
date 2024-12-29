// const Squelize = require("sequelize");

// const sequelize = require("../util/database");

const Sequelize = require("sequelize");

const squelize = require("../util/database");

const cartItem = squelize.define("cartItem" , {
    id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    quantity:Sequelize.INTEGER,
    
})


module.exports = cartItem;



