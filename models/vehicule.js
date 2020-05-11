const mongoose=require('mongoose')


const vehiculeSchema=mongoose.Schema({

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
couleur:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('vehicule',vehiculeSchema )