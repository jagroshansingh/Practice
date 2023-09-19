let ar=[6,3,2,6,88,32,1,5]

//------------quick sort

const qsort=(s,e)=>{
    if(s<e)
    {
        let p=pivot(s,e)
        qsort(s,p-1)
        qsort(p+1,e)
    }
}

function pivot(s,e){
    let j=s-1;
    let pi=ar[e]
    for(let i=s; i<e; i++)
    {
        if(ar[i]<=pi)
        {
            j++;
            swap(i,j)
        }
    }
    j++;
    swap(j,e)
    return j;
}

function swap(a,b){
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
}

qsort(0,ar.length-1)
console.log(ar)

