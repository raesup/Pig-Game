"use strict";

const rollBtn = document.querySelector(".roll");
const newBtn = document.querySelector(".new");
const holdBtn = document.querySelector(".hold");
const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");

let score0 = document.querySelector(".score0");
let score1 = document.querySelector(".score1");
let currentScore = 0;
let currentScore0 = document.querySelector(".currentScore0");
let currentScore1 = document.querySelector(".currentScore1");
let activePlayer = 0;

const init = function () {
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add("hidden");
  player0.classList.add("active");
  player1.classList.remove("active");
};

init();

rollBtn.addEventListener("click", () => {
  dice.classList.remove("hidden");
  const randomDice = Math.trunc(Math.random() * 6) + 1;
  dice.src = `images/dice-${randomDice}.png`;
  if (randomDice !== 1) {
    currentScore += randomDice;
    activePlayer === 0
      ? (currentScore0.textContent = currentScore)
      : (currentScore1.textContent = currentScore);
  } else {
    currentScore = 0;
    activePlayer === 0
      ? (currentScore0.textContent = currentScore)
      : (currentScore1.textContent = currentScore);
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    player0.classList.toggle("active");
    player1.classList.toggle("active");
  }
});

holdBtn.addEventListener("click", () => {
  console.log("hold");
});

newBtn.addEventListener("click", () => {
  init();
});
