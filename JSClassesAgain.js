
class vehicle{
    constructor(type,tyres){
        this.type=type;
        this.tyres=tyres
    }

    execute(){
        console.log(this.type+" is nothing to do with "+this.tyres)
    }

    checking=()=>{
        console.log(this.type+" has "+this.tyres+" tyres.")
    }
}

let see=new vehicle('car',4)
// console.log(see)
// see.checking()

class car extends vehicle{
    constructor(a,b,brand,reg){
        super(a,b)
        this.brand=brand;
        this.regNo=reg
    }

    testing=()=>{
        console.log("hula hurra"+this.brand)
    }

    again(){
        console.log(this)
        console.log(this.brand+" "+this.type+" with reg no "+this.regNo+" is "+this.brand)
    }
}

let saw=new car('car',4,'Hyndai',4454)
saw.again()