const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'sqlite/datat.db' ,
    logging: false,  
  });


module.exports = db
