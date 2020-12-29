const express = require("express");
const router = express.Router();

const {
    getClientes,
    addCliente,
    updateCliente,

} = require('./controllers/clienteController') 

router.post("/add",addCliente ) 
router.put("/update/:id",updateCliente);
router.get("/",getClientes);



module.exports = router;

