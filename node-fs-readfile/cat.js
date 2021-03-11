const fs = require('fs');
let concatonatedFiles = '';

for(let i = 0; i < process.argv.length; i++){
  if(i < 1){
    readContent(process.argv[i]);
  }

}

function readContent(fileName){
  fs.readFile(fileName, 'utf8', (err, data) => {
    if(err) throw err;
    concatonatedFiles += data + "\n";
    console.log(concatonatedFiles);
  });
}
