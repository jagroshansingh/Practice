const os=require('os')

// console.log(os)

// console.log(os.arch())          //---------CPU architechture
// console.log(os.cpus())          //-------return array having information about CPU cores
// console.log(os.cpus().length)        //-----for number of CPU cores
// console.log(os.freemem())      //------amount of free memory in "BYTES" 

// console.log(os.hostname())         //--------returns hostname of system
// console.log(os.machine())           //-------machine type like architechure
// console.log(os.networkInterfaces())
// console.log(os.platform())             //--------operating system name
// console.log(os.totalmem())
// console.log(os.type())              //--------OS name
// console.log(os.release())           //--------OS version(in numbers)

// console.log(os.uptime())        //system uptime/awaketime in seconds
console.log(os.userInfo())
// console.log(os.version())        //--------OS version (in Plain English)

