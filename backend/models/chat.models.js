const mongoose=require('mongoose')

const Schema=mongoose.Schema

const messageSchema=new Schema({
    name:{type:String,trim:true,required:true},
    dob:{type:Date,default:Date.now},
    message:{type:String,trim:true,required:true,unique:false},
   
    
},{
   timestamps:true
})

const message=mongoose.model('CHAT',messageSchema)

module.exports=message;