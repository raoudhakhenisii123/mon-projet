const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const vehicules=require('../models/vehicule')


//Get reservation
router.get('/', auth,(req,res)=>{
    vehicules.find({user:req.user.id})
    .then(vehicules=>res.json(vehicules))
    .catch(err=>console.log(err.message))
})
//router post
router.post('/', [auth,[
    check('nom','name of troupe is required').not().isEmpty(),
    check('lienimg', 'lien is required').not().isEmpty(),
    check('type', 'type is required').not().isEmpty(),
    check('couleur', 'couleur is required').not().isEmpty()
]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {nom, lienimg,type,couleur}=req.body
    const newvehicule=new vehicules({
        nom,
        lienimg,
        type,
        couleur,
        user:req.user.id
    })
    newvehicule.save()
    .then(vehicules=>res.json(vehicules))
    .catch(err=>console.log(err.message))
})
//router delete
router.delete('/:id', auth ,(req,res)=>{
    vehicules.findById(req.params.id)
  .then(vehicule=>{
      if(!vehicule){
          return res.json({msg:'vehicule not found'})
      }else if 
          (vehicule.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        vehicules.findByIdAndDelete(req.params.id ,(err,data)=>{
              res.json({msg:'vehicule deleted'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
  const {nom, lienimg, type,couleur}=req.body

  //Build a object salle
  let vehiculeFields={}
  if(nom) vehiculeFields.nom=nom
  if(lienimg) vehiculeFields.lienimg=lienimg
  if(type) vehiculeFields.type=type
  if(couleur) vehiculeFields.couleur=couleur
  
  vehicules.findById(req.params.id)
  .then(vehicule=>{
      if(!vehicule){
          return res.json({msg:'vehicule not found'})
      }else if 
          (vehicule.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        vehicules.findByIdAndUpdate(req.params.id, {$set:vehiculeFields}, (err,data)=>{
              res.json({msg:'vehicule updated'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router