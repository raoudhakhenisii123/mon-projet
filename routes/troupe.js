const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const troupes=require('../models/troupes')


//Get reservation
router.get('/', auth,(req,res)=>{
    troupes.find({user:req.user.id})
    .then(troupes=>res.json(troupes))
    .catch(err=>console.log(err.message))
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
    const newtroupe=new troupes({
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
    troupes.findById(req.params.id)
  .then(troupes=>{
      if(!troupes){
          return res.json({msg:'troupe not found'})
      }else if 
          (troupes.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        troupes.findByIdAndDelete(req.params.id ,(err,data)=>{
              res.json({msg:'troupe deleted'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
  const {nom, lienimg, thèmes}=req.body

  //Build a object salle
  let troupeFields={}
  if(nom) troupeFields.nom=nom
  if(lienimg) troupeFields.lienimg=lienimg
  if(thèmes) troupeFields.thèmes=thèmes
  

  troupes.findById(req.params.id)
  .then(troupes=>{
      if(!troupes){
          return res.json({msg:'troupe not found'})
      }else if 
          (troupes.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        troupes.findByIdAndUpdate(req.params.id, {$set:troupeFields}, (err,data)=>{
              res.json({msg:'troupe updated'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router