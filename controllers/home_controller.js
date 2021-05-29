module.exports.home=function(req,res){
   console.log(req.cookies);
   res.cookie('username','somet')
   return res.render('home',{
      title:"Home",
   })
}