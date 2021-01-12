const {Votes} = require("../../models");


const getVotes = async (req,res)=>{
    try{
        const votes= await Votes.findAll({where: { userId: req.params.id}})
        res.status(200).send(votes)
    }catch(err){
        res.status(500).send(err)
    }

}

const addVotes = async (req,res)=>{
        const {FeaturesErrorId, userId} = req.body
        console.log(req.body)
        const vote = await Votes.findAll({where: {FeaturesErrorId, userId}})
        if(vote.length){
           return res.status(403).send("Este usuario ya voto este pedido.")
        }
            Votes.create({FeaturesErrorId, userId}).then(()=>{
                res.send("voto agregado")
             }).catch((e)=> res.status(500).send(e))
    
    }


module.exports = {
    getVotes,addVotes
}