const fs = require('fs');
let randomNumber = Math.random();

fs.writeFile('random.txt', randomNumber.toString(), (err) => {
  if(err) throw err;
  return
});
