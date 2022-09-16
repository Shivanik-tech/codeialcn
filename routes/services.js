const express=require('express');
const router=express.Router();
const userController=require('../controllers/service_controller');
router.get('/srvc',userController.service);
module.exports=router;
//localhost:7888/services/srvc se service_controller fetch hua