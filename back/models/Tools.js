const S = require("sequelize")
const db = require("../db")

class Tools extends S.Model{}
Tools.init({
    toolName:{
        type: S.STRING,
        allowNull: false,
    },userId:{
        type: S.STRING,
        allowNull : false,
    },status:{
        type: S.STRING,
        allowNull:false,
        defaultValue: "Pending" ,
    },
}, { sequelize: db, modelName: "Tools" })

module.exports = Tools