const express = require("express");
const router = express.Router();


router.get("/clientes", (req,res)=>{
res.send("/api/clientes hoja router")
})

module.exports = router;
