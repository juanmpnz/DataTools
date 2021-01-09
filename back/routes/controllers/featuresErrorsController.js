const {
  FeatureErrors,
  } = require("../../models");

  const getAll = (req,res,next)=>{
   FeatureErrors.findAll()
  .then((item)=>res.send(item))
  .catch(next)
  }

  const addOrder = (req,res,next)=>{
    const {tool,type,img,description} = req.body
    FeatureErrors.create({tool,type,img,description})
    .then((order)=> res.send(order))
    .catch((e)=>e)
  }
  

module.exports = {
  getAll,
  addOrder,

};
