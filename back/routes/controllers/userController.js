const {User} = require("../../models");

const getUsers = (req,res,next) =>{
  console.log(req.hola)
  User.findAll()
  .then((users)=> res.send(users))
  .catch((e) => res.send(e));
}

const userRegister = (req,res,next)=>{
    const {email,password,name,lastname} = req.body

    User.create({email,password,name,lastname})
        .then((user) => {
          res.status(201).send(user);
        })
        .catch((e) => res.send(e));

}

const login = async (req, res) => {

  try{
    const user = await User.findOne({where: {
      email:req.body.email
    }})
    const {name,lastname,email, id} = user 
    res.send({name,lastname,email,id})
  }catch(err){
    console.log(err)
    throw new Error(err)
  }
}

const me = (req, res) => {
  console.log("AUTHENTICATED", req.isAuthenticated());
  if (!req.user) res.sendStatus(401)
  res.send(req.user);
};

const logout = (req, res)=>{
    req.logOut();
    res.sendStatus(200);
    res.send({});
}

  module.exports = {
    userRegister,
    getUsers,
    login,
    me,
    logout,
      
  };
