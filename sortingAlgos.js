
let ar=[3,6,3,5,2,8,9,5,1,4];
console.log(ar)

function swap(a,b)
{
    let temp;
    temp=ar[a];
    ar[a]=ar[b];
    ar[b]=temp;
}

//--------------------------Insertion Sort
function insertion(){
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
}
// insertion()
// console.log(ar)


//--------------------------Selection Sort
function selection(){
for(let i=0; i<ar.length; i++)
{
    let min=Infinity;
    let pos;
    for(let j=i; j<ar.length; j++)
    {
        if(ar[j]<min)
        {
            min=ar[j]
            pos=j
        }
    }
    swap(i,pos)
}
}
// selection()
// console.log(ar)

//---------------------------Bubble Sort
function bubble(){
for(let i=0; i<ar.length-1; i++)
{
    let flag=false
    for(let j=0; j<ar.length-(i+1); j++)
    {
        if(ar[j]>ar[j+1])
        { 
            swap(j,j+1)
            flag=true;
        }
    }
    if(!flag) break;
}
}
// bubble()
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
// sort()
// console.log(ar)


// ----------------------quick sort
function qsort(s,e){
    if(s<e){
        let p=pivot(s,e)
        qsort(s,p-1)
        qsort(p+1,e)
    }
}

function pivot(s,e){
    let i=s-1
    for(let j=s; j<e; j++)
    {
        if(ar[j]<ar[e])
        {
            i++;
            swap(i,j)
        }
    }
    i++;
    swap(i,e)
}
qsort(0,ar.length-1)
console.log(ar)
