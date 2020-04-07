const router= require('express').Router();
let CHAT=require('../models/chat.models')

router.get('/' ,async(req,res)=>{
    CHAT.find()
    .then(message=>res.json(message))
    .catch(err=>res.status(400).json('Error' +err))
})

router.post('/add',async(req,res)=>{
   const name=req.body.name;
   const dob=req.body.dob;
   const message=req.body.message;

   const newUser=new CHAT({
       name,dob,message
   })

   newUser.save()
   .then(()=>res.json('User added'))
   .catch(err=>res.status(400).json('Error'+err))
})


module.exports=router



