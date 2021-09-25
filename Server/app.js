const  express = require('express')
const app=express()//invoking express
const PORT= 5000
const mongoose = require('mongoose')
const {MONGOURI} =require('./keys')
 
require('./models/user')

mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>
{
  console.log("connected to mongo yeah")
})
mongoose.connection.on('error',(err)=>
{
  console.log("connection error",err)
})

app.listen(PORT ,()=>
{
  console.log("server is running on 5000")
})