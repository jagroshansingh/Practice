
let roman={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
}

let romanNum='XCIV'

function convert(){
    let res=0
    for(let i=0; i<romanNum.length; i++)
    {
        if(roman[romanNum[i]]<roman[romanNum[i+1]])
        {
           res+=roman[romanNum[i+1]]-roman[romanNum[i]]
           i++;
        }
        else res+=roman[romanNum[i]]
    }
    console.log(res)
}

convert()