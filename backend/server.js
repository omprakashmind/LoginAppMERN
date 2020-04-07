const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

require('dotenv').config();

const app=express();
const port=process.env.PORT || 5000;



app.use(cors())
app.use(express.json())

const uri=process.env.ATLAS_URI
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
.then(()=>console.log('Data base connection'))
.catch(err=>console.log('Error'))

const connection=mongoose.connection
connection.once('open',()=>{
    console.log('MONGODB CONNECTION SUCCESFULLY ESTABLISHES')
})

const userValue=require('./routes/user')
const chatValue=require('./routes/chat')


app.use('/user',userValue)
app.use('/chat',chatValue)


    
app.listen(port,()=>{
    console.log(`SERVER is running at port ${port}`)
})



