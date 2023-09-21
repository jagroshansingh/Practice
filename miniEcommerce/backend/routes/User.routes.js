const express=require('express')
const { UserModel } = require('../models/User.model')
const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const payload=req.body
    try {
        const user=new UserModel(payload)
        await user.save()
        res.send({"msg":"New Users has been registered"})
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }
})

userRouter.post("/login",(req,res)=>{

})

module.exports={userRouter}