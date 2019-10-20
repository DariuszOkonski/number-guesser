let min = 1;
let max = 10;
let winningNum = 2;
let guessesLeft = 3;

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    return;
  }

  if (guess === winningNum) {
    gameOver('green', `${winningNum} is correct, YOU WIN!!!`);

  } else {
    guessesLeft--;

    if (guessesLeft === 0) {
      // Game over - lost      
      gameOver('red', `Game Over, you lost. The correct number was ${winningNum}`);

    } else {
      // Game continues - answer wrong
      wrongGuess();
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'blue');
    }
  }
});

function wrongGuess() {
  guessInput.style.borderColor = 'red';
  guessInput.value = '';
}

function gameOver(color, msg) {
  message.style.display = 'none';
  guessInput.disabled = true;
  guessBtn.style.visibility = 'hidden';
  guessInput.style.borderColor = color;

  setMessage(msg, color);
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
  message.style.display = 'inline-block';
  message.style.border = `1px solid ${color}`;
  message.style.padding = '5px 10px';
  message.style.borderRadius = '5px';
}