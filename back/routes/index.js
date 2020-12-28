const express = require("express");
const router = express.Router();
const clientesRouter = require("./clientes");


router.get("/ping", (req, res) => res.send("pong"))
router.get("/clientes", clientesRouter)


module.exports = router;
