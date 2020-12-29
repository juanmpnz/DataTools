const {
    Clientes,
    Trabajos,

  } = require("../../models");

  const getTrabajos = (req,res,next) =>{
      res.send("trabajos todos")
  }

  module.exports = {
    getTrabajos,

  
  };
  