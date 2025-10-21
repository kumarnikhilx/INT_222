import fs from  'fs';
const content = 'Hello, this is a sample text written to a file using Node.js fs module.';
fs.writeFile('write.txt', content, (err )=> {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('File written successfully');
  } 
});