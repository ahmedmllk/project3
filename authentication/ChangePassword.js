const crypto = require('crypto');
const User = require('../model/UserSchema');
const EmailSender = require('../middleware/EmailSender');
const TokenModel = require('../model/TokenSchema');

async function forgotpassword(req,res){
    console.log(req.body)
    const { email } = req.body;
    const token = crypto.randomBytes(2).toString('hex');
    const TokenResetExpires = Date.now() + 3600000;
    const user = new TokenModel({email:email,token:token,during:TokenResetExpires}) ;
    console.log(token)
    console.log('we are here',email)
    EmailSender(token,email)
    user.save()
}

async function changepassword(req,res){
    const { token } = req.params;
    const { email, password } = req.body;
    const prop=await TokenModel.findOne({email:email,token:token,during:{$gt: Date.now()}})
    if (!prop) {
        return res.status(400).json({ message: 'Invalid or expired token' });
      }
    User.findOneAndUpdate({email:email},{password:password})
    TokenModel.findOneAndRemove({email:email})
    res.status(201).json({message: 'password changed successfully'})
}

module.exports={forgotpassword,changepassword}