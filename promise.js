
const myProm=new Promise((res,rej)=>{
    let rese=-Infinity
    if(rese) res('Resolved success')
    else rej('Oops Rejected')
})

myProm
.then(res=>console.log(res))
.catch(err=>console.log('err',err))