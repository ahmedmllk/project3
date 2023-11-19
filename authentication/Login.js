const bcrypt = require('bcrypt');
const User = require('../model/UserSchema');

const Login = async (req,res)=>{
    const {username,password}=req.body;
    const user = await User.findOne({username:username})
    try{
       if(user && bcrypt.compare(password,user.password)){
        req.session.user=user;
        res.send('Login successful !')
    }
    else{
        res.status(401).send('Invalid username or password')
    } 
    } catch(error){
        console.error(error)
        res.status(500).send('Internal Server Error')
    }
    
}

module.exports=Login