const mongoose = require('mongoose');

const TokenSchema=mongoose.Schema({
    email:{type:String,required:true,unique:true},
    token:{type:String,required:true},
    during:{type:Date,required:true}
})

const TokenModel=mongoose.model('TokenModel',TokenSchema)

module.exports=TokenModel