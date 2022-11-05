"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 800;
const IMAGES = ["imgs/card-1-img.png", "imgs/card-1-img.png", "imgs/card-2-img.png",
  "imgs/card-2-img.png", "imgs/card-3-img.png", "imgs/card-3-img.png",
  "imgs/card-4-img.png", "imgs/card-4-img.png", "imgs/card-5-img.png",
  "imgs/card-5-img.png", "imgs/white-img-6.png", "imgs/white-img-7.png",
  "imgs/white-img-8.png", "imgs/white-img-9.png", "imgs/white-img-10.png",
  "imgs/white-img-6.png", "imgs/white-img-7.png", "imgs/white-img-8.png",
  "imgs/white-img-9.png", "imgs/white-img-10.png"
];

//This algorithm does a perfect Fisher-Yates shuffle:
function shuffle(items) {

  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

//The following shuffles the images and createsCards from them:
const imagesShuffled = shuffle(IMAGES);
const gameBoard = document.getElementById('card-list');
let countForId = 1;
function createCards(imagesShuffled) {

  for (let image of imagesShuffled) {

    //create new card div
    const divForIndividualCard = document.createElement('div');
    divForIndividualCard.className = ('card');
    divForIndividualCard.setAttribute('image-src', image);

    //set card image as the revealed card
    const imgOfGeometry = document.createElement('img');
    imgOfGeometry.src = image;
    imgOfGeometry.id = 'img-' + countForId;
    countForId++;
    //disables img dragging on webpage (could previously
    //drag card and see the answer without flipping card)
    imgOfGeometry.ondragstart = () => {
      return false;
    };

    //append is better than appendChild
    divForIndividualCard.append(imgOfGeometry);
    gameBoard.append(divForIndividualCard);
  }
}
createCards(imagesShuffled);


const cards = document.querySelectorAll('.card-container .card');
console.log(cards);
let counter = 0;
let firstCard = '';
let secondCard = '';
//upon click execute the following:
cards.forEach((card) => {
  card.addEventListener('click', () => {

    const clickedCards = document.querySelectorAll('.card.clicked');
    if (!clickedCards[1]) card.classList.add('clicked');

    if (counter === 0) {
      firstCard = card;
      counter++;
    } else if (counter === 1 && card !== firstCard) {
      secondCard = card;
      counter = 0;
    }

    const firstCardSrc = firstCard.getAttribute('image-src');
    let secondCardSrc = '';
    if (secondCard) {
      secondCardSrc = secondCard.getAttribute('image-src');
      console.log({secondCard});
    }

    if (firstCardSrc === secondCardSrc) {
      const matchedPairNode = document.querySelectorAll(
        ".card[image-src='" + firstCardSrc + "']");
        console.log({matchedPairNode});
        matchedPairNode[0].classList.add('correct');
        matchedPairNode[0].classList.remove('clicked');
        matchedPairNode[1].classList.add('correct');
        matchedPairNode[1].classList.remove('clicked');
        firstCard = '';
        secondCard = '';


    } else if (counter === 0 && secondCard) {
      const incorrectPairNode = document.querySelectorAll('.card.clicked');
      console.log({incorrectPairNode});
      incorrectPairNode[0].classList.add('shake');
      incorrectPairNode[1].classList.add('shake');

      //after being revealed, if incorrect match, shake then
      //unclick (flip back over) after wait msec
      setTimeout(() => {
        incorrectPairNode[0].classList.remove('shake');
        incorrectPairNode[0].classList.remove('clicked');
        incorrectPairNode[1].classList.remove('shake');
        incorrectPairNode[1].classList.remove('clicked');
        secondCard = '';
        firstCard = '';
      }, FOUND_MATCH_WAIT_MSECS);
    }

  });
});

