import fs from 'fs';
const content="Hello world LPU";

fs.writeFile('data.txt',content,(err)=>{
    if(err)console.log(err);
    console.log("The file is written");
    try {
      fs.renameSync("data.txt", "newData.txt");
      console.log("successfully!");
    } catch (err) {
      console.error(err);
    }
});
