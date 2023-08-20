
const sequelizePackage = require('sequelize');
const sequelize = require('../utils/database')

const Expense = sequelize.define('expensetable',{
    id:{
        type:sequelizePackage.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:sequelizePackage.STRING,
        allowNull:false
    },
    amount:{
        type:sequelizePackage.BIGINT,
        allowNull:false
    },
    date:{
        type:sequelizePackage.DATE,
        allowNull:false
    },
    type:{
        type:sequelizePackage.STRING,
        allowNull:false
    }
})


module.exports = Expense;