const mongoose=require('mongoose')

let connection=mongoose.connect('mongodb://127.0.0.1:27017/miniEcommerce')

module.exports={connection}