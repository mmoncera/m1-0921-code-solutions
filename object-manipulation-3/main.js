// const _ = require('lodash');
console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
===============================================================================
function that creates players
===============================================================================
*/
function createPlayers(names) {
  var players = [];

  for (let i = 0; i < names.length; i++) {
    players.push({
      name: names[i],
      hand: [],
      score: 0
    });
  }
  return players;
}

var names = ['Safia', 'Ericka', 'Laura', 'Mojdeh'];

var group1 = createPlayers(names);

console.log('value of group1:', group1);

/*
===============================================================================
function that creates a deck standard 52-card deck
===============================================================================
*/
function createDeck() {
  var deck = [];
  var suits = ['Spades', 'Clubs', 'Hearts', 'Diamonds'];
  var ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A'
  ];
  var points = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      deck.push({
        rank: ranks[j],
        suit: suits[i],
        point: points[j]
      });
    }
  }

  return deck;
}

/*
===============================================================================
shuffled deck using Lodash
===============================================================================
*/
var deck1 = _.shuffle(createDeck());

console.log('value of deck1:', deck1);

/*
===============================================================================
deal 2 cards to each player where each card is different
===============================================================================
*/

function deal(players, rounds, deck) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < rounds; j++) {
      var card = deck[j].rank + ' of ' + deck[j].suit;

      players[i].hand.push(card);
      players[i].score += deck[j].point;
    }

    deck.splice(0, rounds);
  }

  return players;
}

var group2 = createPlayers(names);
var deck2 = _.shuffle(createDeck());
console.log('value of deal(group2, 2, deck2):', deal(group2, 2, deck2));

/*
===============================================================================
find the player(s) with the highest score and log to console
===============================================================================
*/

var highestScore = 0;

for (let i = 0; i < group2.length; i++) {
  if (group2[i].score > highestScore) {
    highestScore = group2[i].score;
  }
}

// array in case there are numerous players with the high score
var winner = [];

for (let j = 0; j < group2.length; j++) {
  if (group2[j].score === highestScore) {
    winner.push(group2[j].name);
  }
}

console.log('the highest score is/are:', winner.join(', '));

/*
===============================================================================
define a function named findWinner which takes 3 parameters of 'players', 'rounds', & 'deck' respectively with a tie breaker
===============================================================================
*/
function findWinner(players, rounds, deck) {
  if (rounds * players.length > deck.length) {
    return 'No winner, not enough cards!';
  }

  deal(players, rounds, deck);

  var highestScore = players.reduce(function (previousValue, currentValue) {
    if (currentValue.score > previousValue) {
      previousValue = currentValue.score;
    }
    return previousValue;
  }, 0);

  var winners = players.filter(function (value) {
    return value.score === highestScore;
  });

  // logs how many people have the high score
  console.log('length of winners array:', winners.length);

  if (winners.length === 1) {
    return winners[0].name + ' is the winner!!!';
  } else {
    return findWinner(winners, 1, deck);
  }
}

var group3 = createPlayers(['Mom', 'Dad', 'Brother', 'Sister']);
var deck3 = _.shuffle(createDeck());

console.log(
  'value of findWinner(group3, 4, deck3):',
  findWinner(group3, 4, deck3)
);
