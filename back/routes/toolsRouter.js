const express = require("express");
const router = express.Router();

const {
    getTools,
    addTool,
    getToolsById
    
} = require('./controllers/toolsController') 

router.post("/:id", addTool)
router.get("/:id",getToolsById);
router.get("/",getTools);



module.exports = router;

