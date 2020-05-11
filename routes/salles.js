const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const salles=require('../models/salles')


//Get reservation
router.get('/', auth,(req,res)=>{
    salles.find({user:req.user.id})
    .then(salles=>res.json(salles))
    .catch(err=>console.log(err.message))
})
//router post
router.post('/', [auth,[
    check('nom','name of troupe is required').not().isEmpty(),
    check('lienimg', 'lien is required').not().isEmpty(),
    check('adresse', 'adresse is required').not().isEmpty(),
    check('NbreChaises', 'NbreChaises is required').not().isEmpty(),
    check('NbreTables', 'NbreTables is required').not().isEmpty(),
]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {nom, lienimg,adresse,NbreChaises, NbreTables}=req.body
    const newsalle=new salles({
        nom,
        lienimg,
        adresse,
        NbreChaises,
        NbreTables,
        user:req.user.id
    })
    newsalle.save()
    .then(salle=>res.json(salle))
    .catch(err=>console.log(err.message))
})
//router delete
router.delete('/:id', auth ,(req,res)=>{
    salles.findById(req.params.id)
  .then(salle=>{
      if(!salle){
          return res.json({msg:'salle not found'})
      }else if 
          (salle.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
          salles.findByIdAndDelete(req.params.id ,(err,data)=>{
              res.json({msg:'salle deleted'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
  const {nom, lienimg, adresse, NbreChaises,NbreTables}=req.body

  //Build a object salle
  let salleFields={}
  if(nom) salleFields.nom=nom
  if(lienimg) salleFields.lienimg=lienimg
  if(adresse) salleFields.adresse=adresse
  if(NbreChaises) salleFields.NbreChaises=NbreChaises
  if(NbreTables) salleFields.NbreTables=NbreTables

  salles.findById(req.params.id)
  .then(salle=>{
      if(!salle){
          return res.json({msg:'salle not found'})
      }else if 
          (salle.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
          salles.findByIdAndUpdate(req.params.id, {$set:salleFields}, (err,data)=>{
              res.json({msg:'salle updated'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router