const {
  FeatureErrors,
    Trabajos,

  } = require("../../models");

  const getAll = (req,res,next)=>{
   FeatureErrors.findAll()
  .then((item)=>res.send(item))
  .catch(next)
  }


  

module.exports = {
  getAll,

};
