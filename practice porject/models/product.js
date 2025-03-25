const Squelize = require('sequelize');

const squelize = require('../utils/db')

const product = squelize.define('product', {
    id: {
        type: Squelize.INTEGER,
        allowNull: false,
        autoIncrement:true,
        primaryKey:true
    },
    name: {
        type:Squelize.STRING,
        allowNull:false,

    },
    description:{
        type:Squelize.STRING,
        allowNull:false
    },
    imageUrl: {
        type: Squelize.STRING,
        allowNull: false
    },
    price: {
        type: Squelize.DOUBLE,
        allowNull: false
    }
})


module.exports = product
