const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const gateaux=require('../models/gateaux')


//Get gateaux
router.get('/', auth,(req,res)=>{
    gateaux.find({user:req.user.id})
    .then(gateaux=>res.json(gateaux))
    .catch(err=>console.log(err.message))
})
//router post
router.post('/', [auth,[
    check('nom','name of troupe is required').not().isEmpty(),
    check('lienimg', 'lien is required').not().isEmpty(),
    check('type', 'type is required').not().isEmpty(),
    check('quantité', 'quantité is required').not().isEmpty()
]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {nom, lienimg,type,quantité}=req.body
    const newgateaux=new gateaux({
        nom,
        lienimg,
        type,
        quantité,
        user:req.user.id
    })
    newgateaux.save()
    .then(gateaux=>res.json(gateaux))
    .catch(err=>console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
    const {nom,lienimg,type,quantité}=req.body
  
    //Build a object gateaux
    let gateauxFields={}
    if(nom) gateauxFields.nom=nom
    if(lienimg) gateauxFields.lienimg=lienimg
    if(type) gateauxFields.type=type
    if(quantité) gateauxFields.quantité=quantité
    
    gateaux.findById(req.params.id)
    .then(gateaux=>{
        if(!gateaux){
            return res.json({msg:'gateaux not found'})
        }else if 
            (gateaux.user.toString()!==req.user.id){
                return res.json({msg:'Not authorized'}) 
        }
        else {
            gateaux.findByIdAndUpdate(req.params.id, {$set:gateauxFields}, (err,data)=>{
                res.json({msg:'gateaux updated'})
            })
        }
  
    })
    .catch (err=> console.log(err.message))
})
//router delete
router.delete('/:id', auth ,(req,res)=>{
    gateaux.findById(req.params.id)
  .then(gateaux=>{
      if(!gateaux){
          return res.json({msg:'gateaux not found'})
      }else if 
          (gateaux.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        gateaux.findByIdAndDelete(req.params.id ,(err,data)=>{
              res.json({msg:'gateaux deleted'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router