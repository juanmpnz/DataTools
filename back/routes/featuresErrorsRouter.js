const express = require("express");
const router = express.Router();
const multer = require("../multer/multerConfig")

const {
    getAll,
    addOrder,
    uploadImg,
    updateOrder,
    updateOrderStatus,
    findOrder,
    getByToolId
    
} = require('./controllers/featuresErrorsController') 

router.post("/add", addOrder)
router.put("/update", updateOrder)
router.put("/status/:id", updateOrderStatus)
router.put("/:id", multer, uploadImg)
router.get("/:id/order", getByToolId)
router.get("/find/:id", findOrder)
router.get("/",getAll);

module.exports = router;

