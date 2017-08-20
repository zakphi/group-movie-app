const express=require('express');
const userRoutes=express.Router();
const usersControllers=require('../controllers/users-controllers');

userRoutes.get('/', usersControllers.index);

module.exports=userRoutes;