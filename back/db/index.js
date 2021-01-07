const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'sqlite/dataTools.sqlite' 
  });


module.exports = db
