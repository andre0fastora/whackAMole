let score = 0;

const gameArea = document.getElementById("whack-a-mole");
const scoreP = document.getElementById("score");

gameArea.addEventListener(`click`, function (e) {
  if (e.target.matches(".mole")) {
    score += 1;
    scoreP.innerText = score;
    e.target.classList.toggle(`mole`);
  }
});

let holes = document.getElementsByClassName("hole");
holes = [...holes];
console.log(holes);

let interval = setInterval(toggleMole, 500);

function toggleMole() {
  let randomNumber = Math.floor(Math.random() * holes.length);
  console.log(`Random Number: ${randomNumber}`);
  holes[randomNumber].classList.toggle(`mole`);
}
