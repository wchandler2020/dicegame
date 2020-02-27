let round1Players = 10;
let playerscore = [];
let roundScore;

function gameInit() {
  round1();
  round2();
}

function rollDie(numberSides) {
  return Math.floor(Math.random() * numberSides) + 1;
}

function diceRoll() {
  let randomNum1 = rollDie(4);
  let randomNum2 = rollDie(6);
  let randomNum3 = rollDie(8);
  let randomNum4 = rollDie(10);
  let randomNum5 = rollDie(12);
  let randomNum6 = rollDie(20);

  document.getElementById("dice1").src = "./images/dice" + randomNum1 + ".png";
  document.getElementById("dice2").src = "./images/dice" + randomNum2 + ".png";
  document.getElementById("dice3").src = "./images/dice" + randomNum3 + ".png";
  document.getElementById("dice4").src = "./images/dice" + randomNum4 + ".png";
  document.getElementById("dice5").src = "./images/dice" + randomNum5 + ".png";
  document.getElementById("dice6").src = "./images/dice" + randomNum6 + ".png";

  roundScore =
    randomNum1 + randomNum2 + randomNum3 + randomNum4 + randomNum5 + randomNum6;

  playerscore.push(roundScore.toString());
  document.getElementById("player-score1").innerHTML = playerscore[0];
  document.getElementById("player-score2").innerHTML = playerscore[1];
  document.getElementById("player-score3").innerHTML = playerscore[2];
  document.getElementById("player-score4").innerHTML = playerscore[3];
  document.getElementById("player-score5").innerHTML = playerscore[4];
  document.getElementById("player-score6").innerHTML = playerscore[5];
  document.getElementById("player-score7").innerHTML = playerscore[6];
  document.getElementById("player-score8").innerHTML = playerscore[7];
  document.getElementById("player-score9").innerHTML = playerscore[8];
  document.getElementById("player-score10").innerHTML = playerscore[9];

  function something(id, index) {
    return (document.getElementById("id").innerHTML = playerscore[index]);
  }
}

const round1 = () => {
  document.getElementById("round-list").innerHTML = "Round 1";
  for (let i = 0; i < round1Players; i++) {
    diceRoll();
  }
};

const round2 = () => {
  document.getElementById("round-list").innerHTML = "Round 2";
  for (let i = 0; i < 2; i++) {
    playerscore.sort().unshift();

    if (i == playerscore[0] || playerscore[1]) {
      document.querySelector(`.player${i + 1}`).style.display = "none";
      diceRoll();
    }
  }
};

const round3 = () => {
  document.getElementById("round-list").innerHTML = "Round 3";
  for (let i = 0; i < 2; i++) {
    playerscore.sort().unshift();

    if (
      i == playerscore[0] ||
      playerscore[1] ||
      playerscore[2] ||
      playerscore[3]
    ) {
      document.querySelector(`.player${i + 1}`).style.display = "none";
      diceRoll();
    }
  }
};
