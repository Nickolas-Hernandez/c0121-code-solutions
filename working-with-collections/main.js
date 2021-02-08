console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'player1'
  },
  {
    name: 'player2'
  },
  {
    name: 'player3'
  },
  {
    name: 'player4'
  }
]
var suits = ['club', 'diamonds', 'hearts', 'spades'];
var values = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10,'jack', 'queen', 'king'];

function createDeck(){
  var deck = [];
  for(var i = 0; i < suits.length; i++){
    for(var j=0; j < values.length; j++){
      deck.push({suit: suits[i], value: values[j]});
    }
  }
  return _.shuffle(deck);
}

function calcHandValue(player){
  var handValue = 0;
  var playerHand = player['hand'];
  for(var j = 0; j < playerHand.length; j++){
    if(playerHand[j]['value'] === 'ace'){
      handValue += 11;
    }else if(playerHand[j]['value'] === 'jack'|| playerHand[j]['value'] === 'queen'|| playerHand[j]['value'] === 'king'){
      handValue += 10;
    }else {
      handValue += playerHand[j].value;
    }
  }
  return handValue;
}

function decideWinner(arrayPLayers){
  var playerValues = [];
  for(var i = 0; i < arrayPLayers.length; i++){
    playerValues.push(arrayPLayers[i]['handValue']);
  }
  var highScore = _.max(playerValues);

  console.log(playerValues);
}


function dealer(playersArr, cardsPerHand){
  var newDeck = createDeck()
  //create hands
  var j = 0;
  for(var i = 0; i < playersArr.length; i++){
     var newHand = [];
    while(newHand.length < cardsPerHand){
      newHand.push(newDeck[j]);
      j++;
    }
    playersArr[i]['hand'] = newHand;
    playersArr[i]['handValue'] = calcHandValue(playersArr[i]);
  }
  //find winner
  decideWinner(players);

  console.log('newDeck:', newDeck);
  console.log('players', playersArr);

}

dealer(players, 2);
