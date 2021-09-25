//making authentication Router with express
const express =require('express')
const router =express.Router()

router.get('/',(req,res)=>{
  res.send("hello")
})

router.post('/signup',(req,res)=>
{
  const {name,email,password} = req.body
  if(!email||!password||!name){
   return res.status(422).json({error : "please add all the fields"})
  }
  res.json({message:"sucesssfuly posted"})
})

module.exports=router