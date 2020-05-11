const mongoose=require('mongoose')


const reservationsSchema=mongoose.Schema({

user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'users'
},
description: {
    type:String,
    required:true
},

date:{
    type:Date,
    default:Date.now

}
})
module.exports=mongoose.model('resevration',reservationsSchema )