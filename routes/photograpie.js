const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const photographie=require('../models/photographie')


//Get photograpie
router.get('/', auth,(req,res)=>{
    photographie.find({user:req.user.id})
    .then(photographie=>res.json(photographie))
    .catch(err=>console.log(err.message))
})
//router post
router.post('/', [auth,[
    check('nom','name of troupe is required').not().isEmpty(),
    check('type', 'type is required').not().isEmpty()
]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {nom, type}=req.body
    const newphotographie=new photographie({
        nom,
        type,
        user:req.user.id
    })
    newphotographie.save()
    .then(photographie=>res.json(photographie))
    .catch(err=>console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
    const {nom,type}=req.body
  
    //Build a object salle
    let photographieFields={}
    if(nom) photographieFields.nom=nom
    if(type) photographieFields.type=type
    
    photographie.findById(req.params.id)
    .then(photographie=>{
        if(!photographie){
            return res.json({msg:'photographie not found'})
        }else if 
            (photographie.user.toString()!==req.user.id){
                return res.json({msg:'Not authorized'}) 
        }
        else {
            photographie.findByIdAndUpdate(req.params.id, {$set:photographieFields}, (err,data)=>{
                res.json({msg:'photographie updated'})
            })
        }
  
    })
    .catch (err=> console.log(err.message))
})
//router delete
router.delete('/:id', auth ,(req,res)=>{
    photographie.findById(req.params.id)
  .then(photographie=>{
      if(!photographie){
          return res.json({msg:'photographie not found'})
      }else if 
          (photographie.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        photographie.findByIdAndDelete(req.params.id ,(err,data)=>{
              res.json({msg:'photographie deleted'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router