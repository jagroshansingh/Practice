const express=require('express')
const { connection } = require('./db')
const { userRouter } = require('./routes/user.routes')
const app=express()
const cors=require('cors')

app.use(express.json())

app.use(cors())
app.get('/',(req,res)=>{
    res.send('HomePage')
})
app.use("/users",userRouter)

app.listen(9000,async()=>{
    try {
        await connection
        console.log('Connected to DB')
    } catch (error) {
        console.log(error.message)
    }
    console.log('Server is running on port 9000')
})