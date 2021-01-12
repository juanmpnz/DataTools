const express = require("express");
const router = express.Router();
const {
    getVotes,addVotes

  } = require("./controllers/votesControllers");

router.get("/user/:id", getVotes )
router.post("/", addVotes)

module.exports = router;