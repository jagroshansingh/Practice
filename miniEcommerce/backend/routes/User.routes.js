const express=require('express')
const { UserModel } = require('../models/User.model')
const userRouter=express.Router()
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')

userRouter.post("/register",async(req,res)=>{
    const {email,name,password}=req.body
    try {
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err) res.send({'msg':'Something went horribly wrong'})
            else{
                const user=new UserModel({email,name,password:hash})
                await user.save()
                res.send({"msg":"New Users has been registered"})
        }
        })
        
    } catch (error) {
        res.send({"msg":"Something went wrong","error":error.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try {
        const user=await UserModel.find({email})
        if(user.length>0) {
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result) {
                    let token=jwt.sign({project:'miniEcommerce'},'koiHai')
                    res.send({'msg':'Logged in','token':token})
                }
                else res.send({'msg':'Wrong credentials'})
            })
        }
        else res.send({"msg":"Wrong Credentials"})
    } catch (error) {
        res.send({'msg':'Something went wrong','error':error.message})
    }

})

module.exports={userRouter}