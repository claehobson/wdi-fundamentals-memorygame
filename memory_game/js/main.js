var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImg: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImg: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImg: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImg: "images/king-of-diamonds.png"
  }
];

let cardsInPlay = [];

function createBoard() {
  for (var i = 0; i < cards.length; i++){
    const cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    document.getElementById("game-board").appendChild(cardElement);
    cardElement.addEventListener('click', flipCard);
  }
}

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again!");
  }
}

function flipCard() {
  cardId = this.getAttribute('data-id');
  console.log('User flipped ' + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImg);
  this.setAttribute('src', cards[cardId].cardImg)
    if (cardsInPlay.length === 2) {
      checkForMatch();
    }
}

createBoard();
