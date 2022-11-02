"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;

const CARD_FRONT = "imgs/memory-card-front.png";
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
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

//The following shuffles the images and createsCards from them:
const imagesShuffled = shuffle(IMAGES);
const gameBoard = document.getElementById('card-list');
function createCards(imagesShuffled) {

  for (let image of imagesShuffled) {
    const divForIndividualCard = document.createElement('div');


    divForIndividualCard.className = 'card';
    divForIndividualCard.addEventListener('click', function(e) {
      handleCardClick(e);
      //is e the card here? What is the card?
    })
    //event listener

    const imgForFront = document.createElement('img');



    imgForFront.src = CARD_FRONT;
    //imgForFront.id = image;
    imgForFront.className = image;

    divForIndividualCard.appendChild(imgForFront);
    gameBoard.appendChild(divForIndividualCard);
  }

  return false
}
createCards(imagesShuffled);

function handleCardClick(evt) {

  //FIX THESE
  const twentiethCard = document.getElementsByClassName('CARD_FRONT')[19];
  if (twentiethCard === undefined) {
    return flipCardReveal(evt.target)
  }

  //const firstCardFlipped = document.getElementsByClassName('back')[0];
  //const secondCardFlipped = document.getElementsByClassName('back')[1];
  const nineteenthCard = document.getElementsByClassName('CARD_FRONT')[18];
  if (nineteenthCard === undefined && evt.target.class) {
    return flipCardReveal(evt.target); //card probably wrong input
  }

  //this prevents the same card already flipped over from being flipped back
  //and flips the second card
  if (secondCardFlipped === undefined && firstCardFlipped.className !==
    evt.target.className) {
    flipCardReveal(evt.target);
  }

  //does this need to say return false to stop executing
  //the function?
  return false
}

debugger
function flipCardReveal(card) {
  card.src = card.id;
  card.id = CARD_FRONT;
  card.className = "back";

  debugger
  const firstCard = document.getElementsByClassName('back')[0];
  const secondCard = document.getElementsByClassName('back')[1];

  //MAYBE IT"S FLIPPING THEM BOTH AT THE SAME TIME BACK DOWN
  if (secondCard !==undefined) {
    setTimeout(flipCardFaceDown(firstCard, secondCard), 5000);
  }
}

/*
function flipCardFaceDown(card1, card2) {
  card1.id = card1.src;
  card1.src = CARD_FRONT;
  card1.className = "front";

  card2.id = card2.src;
  card2.src = CARD_FRONT;
  card2.className = "front";
}
*/



/** Shuffle array items in-place and return shuffled array. */



/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

/**THE Function for colors instead of images:
function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    // missing code here ...
    //for every color of colors
    //push the img of the back of the card
    //with the same class of the front of the card
    //in order to know the format and tags css
    //is probably now important
  }
}
*/


/** Flip a card face-up. */

/*UNCOMMENT
f
*/

/** Flip a card face-down. */

/*UNCOMMENT
function flipCardFaceDown(card) {
  // ... you need to write this ...
}
*/

//THIS IS A FUNCTION THAT I ADDED:
/*UNCOMMENT

*/


/** Handle clicking on a card: this could be first-card or second-card. */

//MAKE AN event listener for the clicking of cards

/*UNCOMMENT
function handleCardClick(evt) {
  // ... you need to write this ...
  // if two cards are turned over, do nothing
  // if clicked the same card, do nothing

  //do I need to put an if statement saying if front isn't undefined?
  const firstCardFront = document.getElementsByClassName('front')[0];
  const secondCardFront = document.getElementsByClassName('front')[1];

  if (firstCardFront === undefined) {
    //flip a bitch
    return flipCardReveal(card); //card probably wrong input
  }

  if (front1 === undefined && front0.id !== front1.id) {
    flipCardReveal(card); //card probably wrong input
    //return //setTimeout(flipCards(), 5000)
    //either insert into the setTimeout function
    //flipCardFaceDown and somehow do it for both cards
    //or make a function flipCardsDown(, card1, card2)
    //that executes flipCardFaceDown() on both
  }
  //does this need to say return false to stop executing
  //the function?
  return false
}
*/

//can you make an even listener for when two cards are clicked,
//or do you commence setTimeout from inside the function


//calling the colors variable, executes
//shuffle(COLORS) shuffles our list const of colors.
//and RETURNS an array of random colors

//we then use the createCards function to accept
//the array colors and for every color of colors
//we push a card into a board position 1-10