const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const decors=require('../models/decors')


//Get decors
router.get('/', auth,(req,res)=>{
    decors.find({user:req.user.id})
    .then(decors=>res.json(decors))
    .catch(err=>console.log(err.message))
})
//router post
router.post('/', [auth,[
    check('nom','name of troupe is required').not().isEmpty(),
    check('lienimg', 'lien is required').not().isEmpty(),
    check('thèmes', 'thèmes is required').not().isEmpty()
]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {nom, lienimg,thèmes}=req.body
    const newdécors=new decors({
        nom,
        lienimg,
        thèmes,
        user:req.user.id
    })
    newdécors.save()
    .then(decors=>res.json(decors))
    .catch(err=>console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
    const {nom,lienimg,thèmes}=req.body
  
    //Build a object gateaux
    let decorsFields={}
    if(nom) decorsFields.nom=nom
    if(lienimg) decorsFields.lienimg=lienimg
    if(thèmes) decorsFields.thèmes=thèmes
    
    decors.findById(req.params.id)
    .then(decor=>{
        if(!decor){
            return res.json({msg:'decors not found'})
        }else if 
            (decor.user.toString()!==req.user.id){
                return res.json({msg:'Not authorized'}) 
        }
        else {
            decors.findByIdAndUpdate(req.params.id, {$set:decorsFields}, (err,data)=>{
                res.json({msg:'decors updated'})
            })
        }
  
    })
    .catch (err=> console.log(err.message))
})
//router delete
router.delete('/:id', auth ,(req,res)=>{
    decors.findById(req.params.id)
  .then(decor=>{
      if(!decor){
          return res.json({msg:'decors not found'})
      }else if 
          (decor.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        decors.findByIdAndDelete(req.params.id ,(err,data)=>{
              res.json({msg:'decors deleted'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router