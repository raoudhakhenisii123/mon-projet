const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret="secret"
const auth=require('../Middlewares/auth')
const User=require('../models/user')




//get the auth
router.get('/', auth,(req,res)=>{
    User.findById(req.user.id)
    .then (user =>res.json(user))
    .catch(err=> console.log(err.message))
})
//login the user
router.post('/',[
    check('email', 'Please enter  a valid email').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    check('role', 'choose your role').not().isEmpty()
], (req, res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})
    }
    const {email, password, role}= req.body
    User.findOne({email})
    .then(user=>{
        if(!user) { 
           return res.status(400).json({msg:"Please register before!"})}
       else{
           bcrypt.compare( password, user.password, (err, isMatch)=>{
               if(err)
              { console.log(err.message)}
              else if (isMatch){
                const payload={
                    user:{
                        id:user.id
                    }
                }
                jwt.sign(payload,jwtSecret,{expiresIn:3600000}, (err,token)=>{
                    if(err) throw err
                    res.json({token})
                })
              }
              else{
                  return res.status(401).json({msg:"Wrong password"})
              }
           })
       }
    })
    .catch(err=>console.log(err.message))
})

module.exports=router