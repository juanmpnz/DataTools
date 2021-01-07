const express = require("express");
const router = express.Router();

const {
    getAll,
 

} = require('./controllers/featuresErrorsController') 

router.get("/",getAll);



module.exports = router;

