const express=require('express');
const router=express.Router();
const {body}=require('express-validator');
const userModel=require('../models/user.model');



router.post('/register',[
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be atleast 3 characters long'),
    body('password'.isLenght({min:3}).withMessage('password must be 6 characters long'))
],

    userController.registerUser
)


module.exports=router;