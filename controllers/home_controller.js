module.exports.home=function(req,res){
   // return res.end("<h1>Express is up and running </h1>")
   return res.render('home',{
    title:"HOME"
   })
}