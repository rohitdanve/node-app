const { error } = require("console");
const fs = require("fs");
const { console } = require("inspector");

fs.readFile("sample.txt", "utf8", (err, data) => {
  if (err) {
    console.error("error", err);
  }
  console.log("this successfully run", data);
});

const content = "this is written to the filesss";
fs.writeFile("output.txt", content, (error) => {
  if (error) {
    console.error(error);
  }
  console.log("file written successfully");
});


const filePath="output.txt"
fs.stat(filePath,( err,stats )=>{
if(err){
  console.error(err);  
  return;
}
console.log('file size', stats.size,'byte');
console.log('is file', stats.isFile());
console.log('is directory', stats.isDirectory());
console.log('file creation time', stats.birthtime);
console.log('file modification time', stats.mtime);


})

const filePaths="output.txt"
const datatoAppend="\n this data will be append this file";
fs.appendFile(filePaths, datatoAppend, (err)=>{
  if(err){
    console.error(err);  
    return;
  }
  console.log("data has been append to the file")
})



 const fileName="sample.txt"
 fs.unlink(fileName,(err)=>{
  if(err){
    console.error(err)
  }
  console.log("file has been deleted");
  
 })

 const directoryPath="new_directorys";
 fs.mkdir(directoryPath,(error)=>{
   if(error){
    console.error(error);
     }
     console.log("Directory create successffuly");
     
 })