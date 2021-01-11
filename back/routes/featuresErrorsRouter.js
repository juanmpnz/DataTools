const express = require("express");
const router = express.Router();
const multer = require("../multer/multerConfig")

const {
    getAll,
    addOrder,
    uploadImg,
    updateOrder,
    findOrder,
    
} = require('./controllers/featuresErrorsController') 

router.post("/add", addOrder)
router.put("/update", updateOrder)
router.post("/:id/img",multer, uploadImg)
router.get("/find/:id", findOrder)
router.get("/",getAll);



module.exports = router;

