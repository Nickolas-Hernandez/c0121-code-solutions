const fs = require('fs');
const fileToCopy = process.argv[2];

fs.readFile(`${fileToCopy}`, 'utf8', (err, contents) => {
  if(err) throw err;
  copyFile(contents);
  return;
});

function copyFile(content){
 fs.writeFile('reminder.txt', content, (err) => {
    if (err) throw err;
    return;
  });
}
