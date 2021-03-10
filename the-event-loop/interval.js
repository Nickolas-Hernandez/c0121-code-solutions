let counter = 3;
const interval = setInterval(countDown, 1000);

function countDown(){
  if(counter === 0){
    console.log('Blast off!')
    clearInterval(interval);
  }else{
    console.log(counter);
    counter--;
  }
  return;
}
