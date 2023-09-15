
let ar=[3,6,3,5,2,8,9,5,1,4];

function swap(a,b)
{
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
}

//--------------------------Insertion Sort
for(let i=1; i<ar.length; i++)
{
    let temp=ar[i];
    let k=i-1;
    while(ar[k]>temp)
    {
        ar[k+1]=ar[k]
        k--;
    }
    ar[k+1]=temp;
}
// console.log(ar)


//--------------------------Selection Sort
for(let i=0; i<ar.length; i++)
{
    let min=Infinity;
    for(let j=i; j<ar.length; j++)
    {
        if(ar[j]<min) min=ar[j]
    }
    ar[i]=min;
}
// console.log(ar)

//---------------------------Bubble Sort
for(let i=0; i<ar.length; i++)
{
    let flag=false
    for(let j=i; j<ar.length-(i+1); j++)
    {
        if(ar[j]>ar[j+1]) swap(j,j+1)
        flag=true;
    }
    if(!flag) break;
}
// console.log(ar)

//----------------------------Merge Sort
sort(0,ar.length-1)
function sort(s,e){
    if(s==e) return

    let mid=Math.floor(s+(e-s)/2)
    sort(s,mid)
    sort(mid+1,e)
    merging(s,e,mid)
}
function merging(s,e,mid){
    let temp=new Array(e-s)
    let i=s,j=mid+1,k=0
    while(i<=mid && j<=e)
    {
        if(ar[i]<=ar[j])
        {
             temp[k]=ar[i];
             i++;
        }
        else
        {
            temp[k]=ar[j]
            j++;
        }
        k++;
    }

    while(i<=mid)
    {
        temp[k]=ar[i];
        k++;
        i++;
    }
    while(j<=e)
    {
        temp[k]=ar[j];
        k++;
        j++;
    }

    k=0
    for(let q=s; q<=e; q++)
    {
        ar[q]=temp[k]
        k++;
    }
}
// console.log(ar)


// ----------------------quick sort

