const express = require("express");
const router = express.Router();

const {
    getTools,
    addTool
    
} = require('./controllers/toolsController') 

router.post("/add-tool", addTool)
router.get("/",getTools);



module.exports = router;

