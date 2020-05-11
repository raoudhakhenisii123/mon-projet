const mongoose=require('mongoose')


const gateauSchema=mongoose.Schema({

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
},
nom:{
    type:String,
    required:true

},
lienimg:{
    type:String,
    required:true
},
type:{
    type:String,
    required:true
},
quantité:{
    type:Number,
    required:true
}
})
module.exports=mongoose.model('gateaux',gateauSchema)