const fs = require("fs");
const [, ,num]=process.argv;
const quote="The struggle you are in today is developing the strength you need for tomorrow"
for(let i=1;i<=num;i++){
fs.writeFile(`backup/text_${i}.txt`,quote,(err)=>{
    console.log("completed writing");
})}
