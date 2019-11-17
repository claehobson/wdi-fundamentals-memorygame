var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImg: "image/queen-of-hearts.jpg"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImg: "image/queen-of-diamonds.jpg"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImg: "image/king-of-hearts.jpg"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImg: "image/king-of-diamonds.jpg"
  }
];

let cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else {
    console.log("Sorry, try again!");
  }
}

function flipCard(cardId) {
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImg);
    if (cardsInPlay.length === 2) {
      checkForMatch();
    }
}

flipCard(0);
flipCard(1);
