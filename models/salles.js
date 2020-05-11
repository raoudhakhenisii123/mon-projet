const mongoose=require('mongoose')


const salleSchema=mongoose.Schema({

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
adresse:{
    type:String,
    required:true
},
NbreChaises:{
    type:Number,
    required:true
},
NbreTables:{
    type:Number,
    required:true
}
})
module.exports=mongoose.model('salle',salleSchema )