const mongoose=require('mongoose')


const photographieSchema=mongoose.Schema({

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
},
nom:{
    type:String,
    required:true

},
type:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('photograpie',photographieSchema)