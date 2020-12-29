const db = require("../db");
const Clientes = require("../models/Clientes");
const Trabajos = require("../models/Trabajos")

Trabajos.belongsTo(Clientes)
Clientes.hasMany(Trabajos)

module.exports={
    db,
    Clientes,
    Trabajos,
}