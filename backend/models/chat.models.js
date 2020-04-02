const mongoose=require('mongoose')

const Schema=mongoose.Schema

const messageSchema=new Schema({
    name:{type:String,trim:true,required:true},
    dob:{type:Date,trim:true,required:true},
    message:{type:String,trim:true,required:true},
   
    
},{
   timestamps:true
})

const message=mongoose.model('CHAT',messageSchema)

module.exports=message;