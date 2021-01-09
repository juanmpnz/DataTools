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
    res.redirect('/login');
}

  module.exports = {
    userRegister,
    getUsers,
    login,
    me,
    logout,
     
  };
/* 

  // ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');

app.post(
  '/user',
  // username must be an email
  body('username').isEmail(),
  // password must be at least 5 chars long
  body('password').isLength({ min: 5 }),
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    User.create({
      username: req.body.username,
      password: req.body.password,
    }).then(user => res.json(user));
  },
); */