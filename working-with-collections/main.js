console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'player1', hand: [] },
  { name: 'player2', hand: [] },
  { name: 'player3', hand: [] },
  { name: 'player4', hand: [] }
];

var deck = {
  rank: ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'],
  suit: ['club', 'diamond', 'hearts', 'spades']
};

function shuffleCards() {
  var cardDeck = [];
  for (var i = 0; i < deck.suit.length; i++) {
    for (var j = 0; j < deck.rank.length; j++) {
      var card = {};
      card.rank = deck.rank[j];
      card.suit = deck.suit[i];
      cardDeck.push(card);
    }
  }
  var shuffledDeck = _.shuffle(cardDeck);
  return shuffledDeck;
}

function dealCards(playersArr, cardsPerHand, deck) {
  var hands = _.chunk(deck, cardsPerHand);
  for (var i = 0; i < playersArr.length; i++) {
    playersArr[i].hand = hands.shift();
  }
}

function calcValues(playersArr, handSize) {
  for (var i = 0; i < playersArr.length; i++) {
    var handValue = 0;
    for (var j = 0; j < handSize; j++) {
      if (playersArr[i].hand[j].rank === 'ace') {
        handValue += 11;
      } else if (playersArr[i].hand[j].rank === 'jack' || playersArr[i].hand[j].rank === 'queen' || playersArr[i].hand[j].rank === 'king') {
        handValue += 10;
      } else {
        handValue += playersArr[i].hand[j].rank;
      }
      playersArr[i].value = handValue;
    }
  }
}

function findWinner(playersArr, handSize) {
  var winner;
  var scores = [];
  var winnersBracket = [];
  for (var i = 0; i < playersArr.length; i++) {
    scores.push(playersArr[i].value);
  }
  var highScore = _.max(scores);
  for (var j = 0; j < playersArr.length; j++) {
    if (playersArr[j].value === highScore) {
      winnersBracket.push(playersArr[j]);
    }
  }
  if (winnersBracket.length > 1) {
    for (var n = 0; n < winnersBracket.length; n++) {
      winnersBracket[n].hand = [];
    }
    gameHandler(winnersBracket, handSize);
  } else {
    winner = winnersBracket[0].name;
    return winner;
  }
}

function gameHandler(playersArr, cardsPerHand) {
  var shuffledDeck = shuffleCards();
  if (cardsPerHand > (shuffledDeck.length / playersArr.length)) {
    console.log('Not enough cards! Run game again!');
    return;
  }
  dealCards(playersArr, cardsPerHand, shuffledDeck);
  calcValues(playersArr, cardsPerHand);
  var winner = findWinner(playersArr, cardsPerHand);
  console.log('winner!', winner);
}

gameHandler(players, 2);
