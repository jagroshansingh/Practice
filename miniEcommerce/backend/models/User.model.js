const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:String,
    email: String,
    password: String
})

const UserModel=mongoose.model('auth',userSchema)    //it's a constructor function

module.exports={UserModel}