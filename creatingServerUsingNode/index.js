const http=require('http')

const server = http.createServer((req, res) => {
    // Get the IP address of the client from the request object
    const ipAddress = req.socket.remoteAddress
    console.log(`Client IP address: ${ipAddress}`);
  
    res.end('Hello!');
  });
  

server.listen(8200,'0.0.0.0',()=>{
    console.log('Server is running at port 8200')
})

//-------------Let me try the same with express------------------

const express=require('express')
const app=express()

// app.set('trust proxy',true);       //when proxy is in place from client side

// app.use((req,res,next)=>{
//     const ipAdress=req.ip;
//     console.log(ipAdress)
//     console.log('hellolll')
//     next();
// })

//----------------for extracting IPV4 address------------------
// app.use((req, res, next) => {
//     // console.log(req.ip)
//     const ipv4=req.socket.remoteAddress
//     req.clientIp = ipv4;
//     next();
//   });
  
//   // Route to test
//   app.get('/', (req, res) => {
//     console.log(`Client IP address: ${req.clientIp}`);
//     res.send('Hello, World!');
//   });

// //By passing '0.0.0.0' as the second argument, the server starts listening to both IPv4 and IPv6
// app.listen(8300,'0.0.0.0',()=>{
//     console.log('Server is running at 8300')
// })