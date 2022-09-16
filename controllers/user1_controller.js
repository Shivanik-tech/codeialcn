// module.exports.profile=function(req,res){
//     res.end("<h1>USER PROFILE PAGE LOADED</h1>")
// }
module.exports.profile=function(req,res){
    return res.render('profile',{
    title:"PROFILE"
     } )
}