const message = document.getElementById('message');
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const attemptsDisplay = document.getElementById('attempts');

let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number between 1 and 100
let attempts = 0;

guessButton.addEventListener('click', function() {
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess)) {
    message.textContent = "Please enter a valid number!";
    return;
  }

  if (userGuess === randomNumber) {
    message.textContent = "Congratulations! You guessed the number in " + attempts + " attempts!";
    guessButton.disabled = true; // Disable button after winning
  } else if (userGuess < randomNumber) {
    message.textContent = "Too low, guess higher!";
  } else {
    message.textContent = "Too high, guess lower!";
  }

  guessInput.value = ""; // Clear the input field after each guess
});
