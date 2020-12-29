const Sequelize = require('sequelize')

const db = new Sequelize('fichas-clientes', 'juan', '', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false, 
  });


module.exports = db
