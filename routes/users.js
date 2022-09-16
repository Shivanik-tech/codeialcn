const express=require('express');
const router=express.Router();
const usersController=require('../controllers/user1_controller');
const userController=require('../controllers/user2_controller')
router.get('/profile',usersController.profile)
router.get('/contact',userController.contact)

module.exports=router;
//localhost:7888/users/profile se user1_controller.js fetch hua