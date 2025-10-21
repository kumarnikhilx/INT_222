import fs from 'fs';
fs.rename('write.txt','newwrite.txt',(err)=>{
    if(err)console.log(err);
    console.log("The file is renamed");
})