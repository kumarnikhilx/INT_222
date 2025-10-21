import fs from 'fs';

const content={
    name:
     "Nikhil",
     marks:99
}

const content1=JSON.stringify(content,null,10);

fs.writeFile('write.txt', content1,(err)=>{
    if(err)return console.log(err);
    console.log("The Content are Written into the file");
})