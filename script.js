'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
function changeMessage(message) {
  document.querySelector('.message').textContent = message;
}
function changeScore(score) {
  document.querySelector('.score').textContent = score;
}
function changeBackground(str) {
  document.querySelector('body').style.backgroundColor = str;
}
function changeWidth(width) {
  document.querySelector('.number').style.width = width;
}
function changeNumber(num) {
  document.querySelector('.number').textContent = num;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    changeMessage('⛔ No Number!');
  }
  // WHEN GUESS IS WRONG
  else if (guess !== randomNumber) {
    if (score > 1) {
      changeMessage(guess < randomNumber ? '📉 Too low!' : '📈 Too high!');
      score--;
      changeScore(score);
    } else {
      changeMessage('💥 You lost the game!');
      changeScore(0);
      changeBackground('#b34747');
    }
  }
  // WHEN PLAYER WINS
  else if (guess === randomNumber) {
    changeMessage('🎉 Correct Number!');
    //
    document.querySelector('h1').textContent = 'BORJA COMPRATE UNA SILLA COMO LA GENTE';
    //
    changeNumber(randomNumber);
    changeBackground('#60b347');
    changeWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  changeScore(score);
  changeMessage('Start guessing...');
  changeNumber('?');
  document.querySelector('.guess').value = '';
  changeBackground('#222');
  changeWidth('15rem');
});
