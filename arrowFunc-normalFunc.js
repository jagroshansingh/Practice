const hello=(store)=>(next)=>(action)=>{
    // body
}


//=========equvilent to==============


function hello(store){
    return function(next){
        return function(action){
            //body
        }
    }
}