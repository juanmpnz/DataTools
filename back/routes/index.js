const express = require("express");
const router = express.Router();
const featuresErrorsRouter = require("./featuresErrorsRouter");
const toolsRouter = require("./toolsRouter")


router.get("/ping", (req, res) => res.send("pong"))
router.use("/features-errors", featuresErrorsRouter)
router.use("/tools", toolsRouter)


module.exports = router;
