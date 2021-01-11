const { body, validationResult } = require('express-validator');

 const validationLogin = ()=>{
    console.log("entro al midleware")
    body('email')
    .notEmpty()
    .withMessage('E-mail cannot be null')
    .bail()
    .isEmail()
    .withMessage('E-mail is not valid'),
    body('password')
      .notEmpty()
      .withMessage('Password cannot be null'),(req,res,next)=>{
        const errors = validationResult(req).errors;
        req.errors = errors
        console.log(validationResult(req))
        next()
      }
     

        
  }

  module.exports = {
    validationLogin,

  }

  