const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const Troupes=require('../models/troupes')


//Get troupe
router.get('/', auth,(req,res)=>{
    Troupes.find({user:req.user.id}).sort({date: -1})
    .then(troupes=>
        res.json(troupes))
    .catch(err=>
        console.log(err.message))
})
//router post
router.post('/', [auth,[
    check('nom','name of troupe is required').not().isEmpty(),
    check('lienimg', 'lien is required').not().isEmpty(),
    check('thèmes', 'themes is required').not().isEmpty()
]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {nom, lienimg,thèmes}=req.body
    const newtroupe=new Troupes({
        nom,
        lienimg,
        thèmes,
        user:req.user.id
    })
    newtroupe.save()
    .then(troupes=>res.json(troupes))
    .catch(err=>console.log(err.message))
})
//router delete
router.delete('/:id', auth ,(req,res)=>{
    Troupes.findById(req.params.id)
  .then(troupes=>{
      if(!troupes){
          return res.json({msg:'troupe not found'})
      }else if 
          (troupes.user.toString()!==req.user.id){
              return res.status(401).json({msg:'Not authorized'}) 
      }else {
          Troupes.findByIdAndDelete(req.params.id, (err,data) => {
              res.json({msg:"troupe deleted"})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
  const {nom, lienimg, thèmes}=req.body

  //Build a object troupe
  let troupeFields={}
  if(nom) troupeFields.nom=nom
  if(lienimg) troupeFields.lienimg=lienimg
  if(thèmes) troupeFields.thèmes=thèmes
  

  Troupes.findById(req.params.id)
  .then(troupes=>{
      if(!troupes){
          return res.json({msg:'troupe not found'})
      }else if 
          (troupes.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        Troupes.findByIdAndUpdate(req.params.id, {$set:troupeFields}, (err,data)=>{
              res.json({msg:'troupe updated'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router