const S = require("sequelize");
const db = require("../db");

class FeaturesErrors extends S.Model {}
FeaturesErrors.init(
  {
    tool: {
      type: S.STRING,
      allowNull: true,
    },
    type: {
      type: S.STRING,
      allowNull: false,
      defaultValue: null ,
    },
    img: {
      type: S.STRING,
      allowNull: true,  
      defaultValue: null ,
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
 
  },
  { sequelize: db, modelName: "FeaturesErrors" }
);

module.exports = FeaturesErrors;
