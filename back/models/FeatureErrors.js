const S = require("sequelize");
const db = require("../db");

class FeaturesErrors extends S.Model {}
FeaturesErrors.init(
  {
    tool: {
      type: S.STRING,
      allowNull: true,
    },
    title: {
      type: S.STRING,
      defaultValue: null ,
      allowNull: true,
    },
    type: {
      type: S.STRING,
      allowNull: true,
      defaultValue: null ,
    },
    img: {
      type: S.STRING,
      allowNull: true,  
   
    },
    description: {
      type: S.STRING,
      allowNull: true,
      defaultValue: null ,
   
    },
    votes: {
        type: S.NUMBER,
        allowNull: true,
        defaultValue: 0 ,
      },
    status:{
        type: S.STRING,
        allowNull:true,
        defaultValue: "Activo" ,
      
    },
   
  },
  { sequelize: db, modelName: "FeaturesErrors" }
);

module.exports = FeaturesErrors;
