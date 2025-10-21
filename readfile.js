import fs from 'fs';
const filepath='newwrite.txt';
fs.readFile(filepath,'utf-8',(err,data)=>{
    if(err){    
        console.log(err);
    }
    else{   
        console.log(data);
    }

})