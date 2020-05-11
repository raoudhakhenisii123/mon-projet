const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const jwtSecret="secret"


const User=require('../models/user')
router.post('/', [
    check('firstname', 'Please enter your firstname').not().isEmpty(),
    check('lastname', 'Please enter your lastname').not().isEmpty(),
    check('email', 'Please enter your email').isEmail(),
    check('password', 'password must be 6 or more caracters').not().isEmpty().isLength({min :8})

], (req, res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {firstname,lastname, email,password}=req.body
    User.findOne({email})
    .then(user=>{
        if(user){
            res.status(400).json({msg:'User already exists'})
        }
        else{
            user=new User({
                firstname,
                lastname,
                email,
                password
            })
            bcrypt.genSalt(10, (err,salt)=>{
                bcrypt.hash(user.password, salt,(err, hashedPassword)=>{
                    user.password=hashedPassword
                    user.save()

                    const payload={
                        user:{
                            id:user.id
                        }
                    }
                    jwt.sign(payload,jwtSecret,{expiresIn:3600000}, (err,token)=>{
                        if(err) throw err
                        res.json({token})
                    })
        })

                })
        }
    })
    .catch(err=>console.log(err.message))
})

module.exports=router