const router= require('express').Router();
let USER=require('../models/user.models')

router.route('/').get((req,res)=>{
    USER.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error' +err))
})

router.route('/add').post((req,res)=>{
   const name=req.body.name;
   const dob=Date(req.body.dob);
   const username=req.body.username;
   const password=req.body.password;


   const newUser=new USER({
       
       name,dob,username,password
   })
   newUser.save()
   .then(()=>res.json('User added'))
   .catch(err=>res.status(400).json('Error'+err))
})

router.route('/find').get((req,res)=>{
    USER.findOne(req.params.username)
    .then(user=>res.json(user=>res.json('Data found'+user)))    
    .catch(err=>res.status(400).json('Error'+err))
})


module.exports=router



