"use strict";

const rollBtn = document.querySelector(".roll");
const newBtn = document.querySelector(".new");
const holdBtn = document.querySelector(".hold");
const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const player0Name = document.getElementById("player0-name");
const player1Name = document.getElementById("player1-name");

let score = [0, 0];
let score0 = document.querySelector(".score0");
let score1 = document.querySelector(".score1");
let currentScore = 0;
let currentScore0 = document.querySelector(".currentScore0");
let currentScore1 = document.querySelector(".currentScore1");
let activePlayer = 0;
let playing = true;

const init = function () {
  score = [0, 0];
  playing = true;
  activePlayer = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  dice.classList.add("hidden");
  player0.classList.add("active");
  player1.classList.remove("active");
  player0Name.textContent = "PLAYER 1";
  player1Name.textContent = "PLAYER 2";
  player0.classList.remove("winner");
  player1.classList.remove("winner");
  dice.classList.add("hidden");
};

const switchPlayer = function () {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

init();

rollBtn.addEventListener("click", () => {
  if (playing) {
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
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", () => {
  score[activePlayer] += currentScore;
  document.querySelector(`.score${activePlayer}`).textContent =
    score[activePlayer];
  currentScore = 0;
  document.querySelector(`.currentScore${activePlayer}`).textContent = 0;

  if (score[activePlayer] >= 20) {
    playing = false;
    document.querySelector(`.player${activePlayer}`).classList.add("winner");
    document.querySelector(
      `#player${activePlayer}-name`
    ).textContent = `Winner!!`;
    dice.classList.add("hidden");
  } else {
    switchPlayer();
  }
});

newBtn.addEventListener("click", () => {
  init();
});
