const {

    Tools,

  } = require("../../models");

  const addTool = (req,res,next)=>{
    console.log("toolsController")
    const userId= req.params.id
    const { toolName } = req.body;
    console.log(toolName)
     Tools.create({toolName, userId})
     .then((data) => res.send(data))
     .catch((err)=>{
       console.log(err)
     });
  }

  const getToolsById = (req,res,next) =>{
    const {id} = req.params

    Tools.findAll({where: {userId:id}})
    .then((tools)=> { 
      res.send(tools.data)})
    .catch((err)=>err)
}

  const getTools = (req,res,next) =>{
      Tools.findAll()
      .then((data)=> res.send(data))
      .catch((err)=>err)
  }

  module.exports = {
    getTools,
    addTool,
    getToolsById
  };
  

