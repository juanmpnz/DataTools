const {
  FeatureErrors,
  } = require("../../models");

  const getAll = (req,res,next)=>{
   FeatureErrors.findAll()
  .then((item)=>res.send(item))
  .catch(next)
  }


  const findOrder = (req,res,next)=>{
    const  id  = req.params.id;
    console.log("entri", id)
    FeatureErrors.findAll({ where: { id } })
    .then((order)=> res.send(order)
    ).catch((e)=>e)
  
  
  }

  const addOrder = (req,res,next)=>{
    const {tool,type,img,description} = req.body
    FeatureErrors.create({tool,type,img,description})
    .then((order)=> res.send(order))
    .catch((e)=>e)
  }

  const updateOrder = (req,res,next) =>{
    const { tool, description, img, id , votes} = req.body;
    FeatureErrors.findByPk(id)
    .then((o)=> o.update({tool,description,img, votes})
    .then((resp)=>{
      console.log(resp)
      res.status(200).send(resp)
    }))
    .catch((e)=>e)
  }


const uploadImg = (req,res,next)=>{
  const file = req.file
  const id = req.params.id
  const url = `${req.protocol}://${req.get("host")}`
  console.log("FILE",file)
  console.log( "ID", id)
  console.log( "URL", url)
  FeatureErrors.findAll({where:{id}}).then((uploadImg)=>{
    uploadImg.update({img:`${url}/images/${file.filename}`} )
  })
  /* FeatureErrors.update({where:{id}} ,{img:`${url}/images/${file.filename}`} ) */

  .then((ok)=> console.log("rta upload im",ok))

}

module.exports = {
  getAll,
  addOrder,
  updateOrder,
  findOrder,
  uploadImg

};
