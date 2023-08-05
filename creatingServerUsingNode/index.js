const http=require('http')

const server = http.createServer((req, res) => {
    // Get the IP address of the client from the request object
    const ipAddress = req.connection.remoteAddress
    console.log(`Client IP address: ${ipAddress}`);
  
    res.end('Hello!');
  });
  

server.listen(8200,()=>{
    console.log('Server is running at port 8200')
})

//-------------Let me try with express

// const express=require('express')
// const app=express()

// app.use((req,res,next)=>{
//     const ipAdress=req.ip;
//     console.log(ipAdress)
//     console.log('hellolll')
//     next();
// })

// app.listen(8300,()=>{
//     console.log('Server is running at 8300')
// })