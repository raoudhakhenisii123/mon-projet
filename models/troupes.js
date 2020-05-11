const mongoose=require('mongoose')


const troupeSchema=mongoose.Schema({

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
thèmes:{
    type:String,
    required:true
}
})
module.exports=mongoose.model('troupe',troupeSchema )