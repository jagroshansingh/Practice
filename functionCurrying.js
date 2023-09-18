//function returning function aka (function currying)


const hello=(store)=>(next)=>(action)=>{              //ES6 syntax
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