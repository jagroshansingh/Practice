const fs=require('fs')

fs.writeFile('./FileSystem/file1.txt','Good morning Mumba','utf8',(err)=>{
   if(err) 
   {
    console.log(err)
    return;
   }
   console.log('....File1 created....')
   fs.writeFile('./FileSystem/file2.txt','Good afternoon Mumba','utf-8',(err)=>{
    if(err)
    {
        console.log(err)
        return;
    }
    console.log('....File2 created....')
    fs.writeFile('./FileSystem/file3.txt','Good Night Mumba','utf-8',(err)=>{
        if(err)
        {
            console.log(err)
            return;
        }
        console.log('....File2 created.....')
    })
   })
})

fs.readFile('./FileSystem/file1.txt','utf-8',(err,data1)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data1)

    fs.readFile('./FileSystem/file2.txt','utf-8',(err,data2)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log(data2);

        fs.readFile('./FileSystem/file3.txt','utf-8',(err,data3)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(data3)
        })
    })
   
})

const readFileAndPrint=async(fileName)=>{
try {
    const data=await fs.readFile(fileName,'utf-8');
    console.log(data)
    return data;
} catch (error) {
    console.error(error);
    throw error
}
}

const processFiles=async()=>{
    try {
        const data1=await readFileAndPrint('file1.txt')
        const data2=await readFileAndPrint('file2.txt')
        const data3=await readFileAndPrint('file3.txt')
    } catch (error) {
        console.log(error)
    }
}

processFiles();