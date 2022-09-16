module.exports.service=function(req,res){
   // return res.send("<h3>Service controller fetched using services routes</h3>")
   return res.render('service',{
    title:"SERVICE"
   })
}
///http://localhost:7888/services/srvc:-------------
/*localhost:7888 ye homepage jo ki(/) se dikhega
  /services yani router check kr rha hai 
  ab uske baad /srvc whi hai jo mujhe service_controller pe redirect krega*/ 