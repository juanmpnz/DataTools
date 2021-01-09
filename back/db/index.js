const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'sqlite/dataTools.db' ,
    logging: false,  
  });


module.exports = db
