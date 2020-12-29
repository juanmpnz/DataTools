const S = require("sequelize")
const db = require("../db")

class Trabajo extends S.Model{}
Trabajo.init({
    work:{
        type: S.TEXT,
        allowNull: false,
    },
    urllocal:{
        type: S.TEXT,
        allowNull: false,
    }
}, { sequelize: db, modelName: "trabajo" })

module.exports = Trabajo