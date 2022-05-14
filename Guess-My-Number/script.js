'use strict';
const check_Btn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const secret = document.querySelector('.number');
const again_Btn = document.querySelector('.again');
const body = document.querySelector('body');
const highscore = document.querySelector('.highscore');

let playing, currentScore, x, guess;

//Starting conditions
const again = function () {
  x = Math.trunc(Math.random() * 20 + 1);
  console.log(x);
  playing = true;
  currentScore = 20;
  message.textContent = 'Start guessing...';
  secret.textContent = '?';
  score.textContent = 20;
  guess = document.querySelector('.guess').value = '';
  body.classList.remove('winner');
  secret.style.width = '15rem';
};
again();

let check = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (playing) {
    //check if guess is a number !!
    if (!guess) {
      message.textContent = 'not a number';
    } else if (currentScore == 0) {
      // looser player
      message.textContent = 'you loose';
      secret.textContent = x;
      playing = false;
    } else if (guess !== x) {
      currentScore--;
      score.textContent = currentScore;
      message.textContent = guess > x ? 'too hight' : 'too low';
    } else {
      // winner player
      message.textContent = 'you win';
      secret.textContent = x;
      playing = false;
      body.classList.add('winner');
      highscore.textContent =
        currentScore > highscore.textContent
          ? currentScore
          : highscore.textContent;
      secret.style.width = '30rem';
    }
  }
};

check_Btn.addEventListener('click', check);
again_Btn.addEventListener('click', again);
