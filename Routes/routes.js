const express=require('express');
const register = require('../authentication/Registration');
const Login = require('../authentication/Login');
const logout = require('../authentication/Logout');
const { changepassword, forgotpassword } = require('../authentication/ChangePassword');
const { IMO } = require('../Web/IMO');
const { IPhO } = require('../Web/IPhO');

const router = express.Router();

router.post('/register',register);
router.post('/login',Login);
router.post('/Logout',logout);
router.post('/forgot-password',forgotpassword)
router.post('/reset-password/:token',changepassword)
router.get('/IMO',IMO)
router.get('/IPhO',IPhO)
module.exports=router