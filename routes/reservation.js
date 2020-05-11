const express =require ('express')
const router=express.Router()
const { check, validationResult } = require('express-validator');
const auth=require('../Middlewares/auth')
const Reservation=require('../models/reservation')


//Get reservation
router.get('/', auth,(req,res)=>{
    Reservation.find({user:req.user.id})
    .then(reservations=>res.json(reservations))
    .catch(err=>console.log(err.message))
})
//router post
router.post('/',  [auth, [
check('description', 'description is required').not().isEmpty()
]],(req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.json({errors:errors.array()})

    }
    const {designation}=req.body
    const newrervation=new Reservation({
        designation,
        user:req.user.id
    })
    newrervation.save()
    .then(reservation=>res.json(reservation))
    .catch(err=>console.log(err.message))
})
//router put
router.put('/:id', auth,(req,res)=>{
    const {description}=req.body
  
    //Build a object reservation
    let reservationFields={}
    if(description) reservationFields.description=description
    
    Reservation.findById(req.params.id)
    .then(reservation=>{
        if(!reservation){
            return res.json({msg:'reservation not found'})
        }else if 
            (reservation.user.toString()!==req.user.id){
                return res.json({msg:'Not authorized'}) 
        }
        else {
            Reservation.findByIdAndUpdate(req.params.id, {$set:reservationFields}, (err,data)=>{
                res.json({msg:'reservation updated'})
            })
        }
  
    })
    .catch (err=> console.log(err.message))
})
//router delete
router.delete('/:id', auth ,(req,res)=>{
    Reservation.findById(req.params.id)
  .then(reservation=>{
      if(!reservation){
          return res.json({msg:'reservation not found'})
      }else if 
          (reservation.user.toString()!==req.user.id){
              return res.json({msg:'Not authorized'}) 
      }
      else {
        Reservation.findByIdAndDelete(req.params.id ,(err,data)=>{
              res.json({msg:'reservation deleted'})
          })
      }

  })
  .catch (err=> console.log(err.message))
})
module.exports=router