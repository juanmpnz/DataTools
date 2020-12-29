const express = require("express");
const router = express.Router();

const {
    getTrabajos,
    
} = require('./controllers/trabajoController') 

router.get("/",getTrabajos);



module.exports = router;

