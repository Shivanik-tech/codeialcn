const express=require('express');
const router=express.Router();
const homeController=require("../controllers/home_controller")
console.log("router loaded")
router.get('/',homeController.home)//creating route for home_controller
router.use('/users',require('./users'))
router.use('/services',require('./services'))

/* 1.  index.js se routes folder k index.js me aayega line5 pe fir check krega 
localhost:7888 agr srf itna hi request kiya hai to homeController ka kaam 
  2.localhost:7888/users yani 2nd router check krega or isme hm localhost:7888/users/profile page load hona chahiye
  3. users.js me code hai profile load krne k liye
  4.user1_controller.js me hi module.exports.profile hai whi load hoga */



module.exports=router;