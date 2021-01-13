const {
  FeatureErrors,
  } = require("../../models");


const uploadImg = (req,res,next)=>{
  const file = req.file
  const id = req.params.id
  const url = `${req.protocol}://${req.get("host")}`
  const img = `${url}/images/${file.filename}`
  FeatureErrors.findByPk(id)
  .then((order)=>{
    order.update({img})
  })
}

  const getByToolId = (req,res,next)=> {
    const  id  = req.params.id;
    FeatureErrors.findAll({where:{ToolId:id}}).then((tools)=>{
      res.status(200).send(tools)
    }).catch((e)=>e)

  }

  const getAll = (req,res,next)=>{
   FeatureErrors.findAll()
  .then((item)=>res.send(item))
  .catch(next)
  }

  const findOrder = (req,res,next)=>{
    const  id  = req.params.id;

    FeatureErrors.findAll({ where: { id } })
    .then((order)=> res.send(order)
    ).catch((e)=>e)
  
  }

  const addOrder = (req,res,next)=>{
    const {tool,type,img,description, votes,status,toolUserId,title} = req.body
    FeatureErrors.create({tool,type,img,description, votes,status,toolUserId,title})
    .then((order)=> res.send(order))
    .catch((e)=>e)
  }

  const updateOrder = (req,res,next) =>{
    const { tool, description,  id , votes,  title, ToolId} = req.body;
    FeatureErrors.findByPk(id)
    .then((o)=> o.update({tool,description, votes, title, ToolId})
    .then((resp)=>{
      res.status(200).send(resp)
    }))
    .catch((e)=>e)
  }

  const updateOrderStatus = (req,res,next)=>{
    const id = req.params.id
    const {status} = req.body
    FeatureErrors.findByPk(id)
    .then((o)=> o.update({status})
    .then((resp)=>{
      res.status(200).send(resp)
    }))
    .catch((e)=>e)

  }
  
module.exports = {
  getAll,
  addOrder,
  updateOrder,
  findOrder,
  uploadImg,
  getByToolId,
  updateOrderStatus,
  
};
