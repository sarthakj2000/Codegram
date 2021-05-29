const User=require('../models/user')
module.exports.profile=function(req,res){
        return res.render('user_profile',{
           title:'profile'
        })
}
module.exports.sign_in=function(req,res){
   return res.render('sign_in',{
      title:"Codegram | signin"
   })
}
module.exports.sign_up=function(req,res){
   return res.render('sign_up',{
      title:"Codegram | signup"
   })
}
//get the signUp data
module.exports.create=function(req,res){
      if(req.body.password!=req.body.confirmPassword){
         return res.redirect('back');
      }
      User.findOne({email:req.body.email},function(err,user){
         if(err){
            console.log('error in finding the user in signing up');
            return;
         }
         if(!user){
            User.create(req.body,function(err,user){
               if(err){
                  console.log('error in creating user while signing up');
                  return;
               }  
               return res.redirect('/users/sign_in');
            })
         }
         else{
            res.redirect('back')
         }
      })
}
//sign in
module.exports.createSession=function(req,res){
   
}