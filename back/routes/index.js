const express = require("express");
const router = express.Router();
const featuresErrorsRouter = require("./featuresErrorsRouter");
const toolsRouter = require("./toolsRouter")
const userRouter = require("./userRouter")
const votesRouter = require("./votesRouter")


router.get("/ping", (req, res) => res.send("pong"))
router.use("/orders", featuresErrorsRouter)
router.use("/tools", toolsRouter)
router.use("/votes", votesRouter)
router.use("/users", userRouter)


module.exports = router;
