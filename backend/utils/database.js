const sequelizePackage = require('sequelize')
const mysql = require('mysql2')


const sequelize = new sequelizePackage('expense','root','24521365',{dialect:'mysql',host:'localhost'});


module.exports  = sequelize;