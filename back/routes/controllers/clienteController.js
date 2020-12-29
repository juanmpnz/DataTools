const {
    Clientes,
    Trabajos,

  } = require("../../models");

  const getClientes = (req,res,next)=>{
  Clientes.findAll()
  .then((clientes)=>res.send(clientes))
  .catch(next)
  }

  const addCliente = (req,res,next)=>{
    const { name, lastname } = req.body;
    Clientes.create({ name, lastname })
    .then((cliente)=> res.send(cliente))
    .catch(next)
  }

  const updateCliente = (req,res,next)=>{
    const { name, lastname, email, whatsapp, adress } = req.body;
    Clientes.findByPk(req.params.id)
    .then((cliente) => cliente.update({name, lastname, email, whatsapp, adress  }))
    .then((clUdated)=> res.send(clUdated))
    .catch(next);

  }

module.exports = {
  getClientes,
  addCliente,
  updateCliente,

};
