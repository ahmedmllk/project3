const bcrypt = require('bcrypt')
const User=require('../model/UserSchema')

const register = async (req,res)=>{
    const {username,email,password}=req.body;
    const hasedpassword= await bcrypt.hash(password,10);
    const user = new User({username:username,email:email,password:hasedpassword});
    await user.save();
    try{
        res.status(201).send('registered successfully ! ')
        console.log('saved') 
    } catch (error){
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
};

module.exports=register