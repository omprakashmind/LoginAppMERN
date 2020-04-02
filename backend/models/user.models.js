const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{type:String,trim:true,minlength:3,required:true},
    dob:{type:Date,trim:true,minlength:5,required:true},
    username:{type:String,unique:true,trim:true,minlength:5,required:true},
    password:{type:String,trim:true,minlength:8,required:true}, 
   
},{
   timestamps:true
})

const user=mongoose.model('USER',userSchema)

module.exports=user;
