
let obj1={
    studentCode:'fw21_0966',
    mobileNo:42452443,
    email:'jag123@gmail.com',
    student:function(){
        console.log('inside obj1'+this)
    }
}

let obj2={
    batallion:'RR',
    serviceNo:44,
    command:'northern',
    miliatory:function(){
        console.log(this)
    }
}

function factory(a,b){
    this.naam=a;
    this.age=b;
    console.log('inside factory'+this.studentCode)
}

let produce=new factory('hari',43)
// console.log(produce)

//call,bind,apply

let see=factory.call(obj1,'ramesh',23)
console.log(see)