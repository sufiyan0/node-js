const Squelize = require('sequelize');

const squelize = new Squelize('nodejs', "root", "" ,{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = squelize