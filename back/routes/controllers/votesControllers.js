const Vote = require("../../models/votes")

const getVotes = async (req,res)=>{
    try{
        const votes= await Vote.findAll({where: { userId: req.params.id}})
        res.status(200).send(votes)
    }catch(err){
        res.status(500).send(err)
    }
}

const addVotes = async (req,res)=>{
        const {FeaturesErrorId, userId} = req.body
        console.log(req.body)
        const vote = await Vote.findAll({where: {FeaturesErrorId, userId}})
        if(vote.length){
            res.status(403).send("Este usuario ya voto este pedido.")
        }
            Vote.create({FeaturesErrorId, userId}).then(()=>{
                res.send("voto agregado")
             }).catch((e)=> res.status(500).send(e))
    
    }

module.exports = {
    getVotes,addVotes
}