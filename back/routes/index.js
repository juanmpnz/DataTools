const express = require("express");
const router = express.Router();
const clientesRouter = require("./clientesRouter");
const trabajosRouter = require("./trabajoRouter")


router.get("/ping", (req, res) => res.send("pong"))
router.use("/clientes", clientesRouter)
router.use("/trabajos", trabajosRouter)


module.exports = router;
