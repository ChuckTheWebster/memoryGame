"use strict"

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


const imagesShuffled = shuffle(IMAGES);
const gameBoard = document.getElementById('card-list');