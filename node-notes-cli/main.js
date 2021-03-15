const fs = require('fs');
const arguments = process.argv;
const data = require('./data.json');

if(arguments[2] === 'read'){
  for(let key in data.notes){
    console.log(`${key}: ${data.notes[key]}`)
  }
}else if (arguments[2] === 'create'){
  data.notes[data.nextId] = arguments[3];
  data.nextId++;
}else if (arguments[2] === 'delete'){
  delete data.notes[arguments[3]];
}else if (arguments[2] === 'update'){
  data.notes[arguments[3]] = arguments[4];
}else console.log("Not a valid argument!");

const returnData = JSON.stringify(data, null, 2)
fs.writeFile('data.json', returnData, (err) =>{
  if(err) throw err;
  return;
});
