const {
    FeatureErrors,
    Tools,

  } = require("../../models");

  const addTool = (req,res,next)=>{
    const { toolName } = req.body;
     Tools.create({toolName})
     .then((data) => res.send(data))
     .catch(next);
  }

  const getTools = (req,res,next) =>{
      Tools.findAll()
      .then((data)=> res.send(data))
      .catch((err)=>err)
  }

  module.exports = {
    getTools,
    addTool
  };
  

