const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
});
console.log('sum:', sum);

const product = numbers.reduce((accumulator, number) => {
  return accumulator * number;
});
console.log('product:', product);

const balance = account.reduce((accumulator, transaction) => {
  if(transaction.type === 'deposit') {
    return accumulator + transaction.amount;
  }else return accumulator - transaction.amount;
}, 0);
console.log('balance:', balance);

const composite = traits.reduce((accumulator, trait) => {
  return Object.assign(accumulator, trait);
}, {});
console.log('composite:', composite);
