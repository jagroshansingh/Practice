let alphabet="ABCDEFGHIJKLMNOPQRSTURWXYZ"
let word='XYZ'

function encode(word){
    let encoded=""
    for(let i=0; i<word.length; i++)
    {
        for(let j=0; j<alphabet.length; j++)
        {
            if(word[i]==alphabet[j]) 
            {
                if((j+1)%2==0)
                {
                    encoded+=alphabet[j]+alphabet[alphabet.length-(j+1)]
                }
                else
                {
                    encoded+=alphabet[alphabet.length-(j+1)]
                }
                break;
            }
        }
    }
    return encoded
}
let res=encode(word)
console.log(res)


function decode(word){
    let decoded=""
    for(let i=0; i<word.length; i++)
    {
        for(let j=0; j<alphabet.length; j++)
        {
            if(word[i]==alphabet[j])
            {
                if(word[i+1] && word[i+1]==alphabet[alphabet.length-(j+1)])
                {
                    decoded+=word[i]
                    i++;
                }
                else 
                {
                    decoded+=alphabet[alphabet.length-(j+1)]
                }
                break;
            }
        }
    }
    return decoded

}
let ans=decode(res)
console.log(ans)