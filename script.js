'use strict';

// Generate a random secret number between 1 and 20 (inclusive)
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initialize the player's score and high score
let score = 20;
let highscore = 0;

// Function to display messages on the webpage
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Add an event listener to the "Check" button
document.querySelector('.check').addEventListener('click', function () {
  // Get the player's guess from the input field
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // Add an event listener to the "Again" button
  document.querySelector('.again').addEventListener('click', function () {
    // Reset the game: restore score, generate a new secret number, and reset UI elements
    score = 20;
    secretNumber;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });

  // Check if the player entered a valid guess
  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';
  } else if (guess === secretNumber) {
    // Player's guess matches the secret number
    document.querySelector('.message').textContent = '✅ Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update the high score if the current score is higher
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    // Player's guess is incorrect
    if (score > 1) {
      // Player still has attempts left
      // Provide feedback and decrease the score
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // Player has no more attempts left
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
