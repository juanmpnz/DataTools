const S = require("sequelize");
const db = require("../db");

class Votes extends S.Model {}
Votes.init(
  {
    userId: {
      type: S.STRING,
      allowNull: false,

    },  
  },
  { sequelize: db, modelName: "Votes" }
);

module.exports = Votes;
