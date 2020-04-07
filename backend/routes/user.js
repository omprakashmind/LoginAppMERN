const router= require('express').Router();
let USER=require('../models/user.models')
let jwt=require('jsonwebtoken')



router.get('/authenticate',async(req,res)=>{
    const username=req.body.username
    const password=req.body.password 

    USER.findOne({username:username,password:password})
    .then(user=>{
     const token=jwt.sign({_id:user._id},process.env.TOKEN_SECRET)
       res.header('auth-token',token).send(token)
    })
    .catch(err=>res.status(400).json('Error'+err))
})


router.get('/', async(req,res)=>{
    USER.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error' +err))

})

router.post('/add', async(req,res)=>{

   const newUser=new USER({
       name:req.body.name,
       dob:req.body.dob,
       username:req.body.username,
       password:req.body.password
   });

  try{
      const savedUser=await newUser.save();
      res.send(savedUser);
  }
  catch(err){
      res.send(400).send(err)
  }
})





module.exports=router



