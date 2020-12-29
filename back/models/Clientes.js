const S = require("sequelize");
const db = require("../db");

class Clientes extends S.Model {}
Clientes.init(
  {
    name: {
      type: S.TEXT,
      allowNull: false,
    },
    lastname: {
      type: S.TEXT,
      allowNull: false,
      defaultValue: null ,
    },
    email: {
      type: S.STRING,
      allowNull: true,
      isEmail: true,
      defaultValue: null ,
    },
    whatsapp: {
      type: S.STRING,
      allowNull: true,
      defaultValue: null ,
   
    },
    adress: {
        type: S.STRING,
        allowNull: true,
        defaultValue: null ,
      },
 
  },
  { sequelize: db, modelName: "clientes" }
);

module.exports = Clientes;
