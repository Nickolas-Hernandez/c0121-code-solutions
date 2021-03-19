const takeAChance = require('./take-a-chance');

const myLuck = takeAChance("Nick");

myLuck.then(value => {
  console.log(value);
}).catch((err) => {
  console.log(err.message);
});
