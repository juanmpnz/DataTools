const express = require("express");
const router = express.Router();

const {
    getAll,
    addOrder
} = require('./controllers/featuresErrorsController') 

router.post("/add", addOrder)
router.get("/",getAll);



module.exports = router;

