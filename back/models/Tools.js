const S = require("sequelize")
const db = require("../db")

class Tools extends S.Model{}
Tools.init({
    toolName:{
        type: S.STRING,
        allowNull: false,
    }
}, { sequelize: db, modelName: "tools" })

module.exports = Tools