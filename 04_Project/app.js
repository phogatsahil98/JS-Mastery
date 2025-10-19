// -------------------- GUESS THE NUMBER GAME --------------------
// Author: Sahil Phogat
// Description: Simple "Guess the Number" game with 10 attempts.
// ---------------------------------------------------------------

// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Store all guesses
let guessedNumbers = [];

// Maximum attempts allowed
let attemptsLeft = 10;

// Game status flag
let isGameActive = true;

// DOM Elements
const inputField = document.getElementById("numberField");
const submitButton = document.getElementById("button_1");
const guessedDisplay = document.getElementById("Guessed");
const attemptsDisplay = document.getElementById("GuessedRemaining");
const outputDisplay = document.getElementById("output");
const playAgainDiv = document.getElementById("playAgain");

// Initialize Attempts Remaining Display
attemptsDisplay.textContent = `Attempts Remaining: ${attemptsLeft}`;

// -------------------- FUNCTION: Validate & Check Number --------------------
function validateInput(userGuess) {
  if (isNaN(userGuess)) {
    outputDisplay.textContent = "❌ Please enter a valid number.";
    return false;
  }
  if (userGuess < 1 || userGuess > 100) {
    outputDisplay.textContent = "⚠️ Enter a number between 1 and 100.";
    return false;
  }
  return true;
}

// -------------------- FUNCTION: Check Guess --------------------
function checkGuess(userGuess) {
  if (!isGameActive) return;

  if (!validateInput(userGuess)) return;

  guessedNumbers.push(userGuess);
  attemptsLeft--;

  // Update UI
  guessedDisplay.textContent = `Guessed Numbers: ${guessedNumbers.join(", ")}`;
  attemptsDisplay.textContent = `Attempts Remaining: ${attemptsLeft}`;

  // Check logic
  if (userGuess === randomNumber) {
    outputDisplay.textContent = `🎉 Correct! ${userGuess} was the number!`;
    endGame();
  } else if (attemptsLeft === 0) {
    outputDisplay.textContent = `💀 Game Over! The number was ${randomNumber}.`;
    endGame();
  } else if (userGuess < randomNumber) {
    outputDisplay.textContent = `📉 Too low! Try a higher number.`;
  } else {
    outputDisplay.textContent = `📈 Too high! Try a lower number.`;
  }

  // Clear input field
  inputField.value = "";
  inputField.focus();
}

// -------------------- FUNCTION: End Game --------------------
function endGame() {
  isGameActive = false;
  inputField.disabled = true;
  submitButton.disabled = true;

  // Show replay button
  const replayBtn = document.createElement("button");
  replayBtn.textContent = "Play Again 🔁";
  replayBtn.classList.add("replay-btn");
  playAgainDiv.innerHTML = "";
  playAgainDiv.appendChild(replayBtn);

  replayBtn.addEventListener("click", resetGame);
}

// -------------------- FUNCTION: Reset Game --------------------
function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessedNumbers = [];
  attemptsLeft = 10;
  isGameActive = true;

  // Reset UI
  guessedDisplay.textContent = "Guessed Numbers:";
  attemptsDisplay.textContent = `Attempts Remaining: ${attemptsLeft}`;
  outputDisplay.textContent = "";
  playAgainDiv.innerHTML = "";
  inputField.disabled = false;
  submitButton.disabled = false;
  inputField.value = "";
  inputField.focus();
}

// -------------------- EVENT LISTENER --------------------
submitButton.addEventListener("click", function () {
  const userGuess = parseInt(inputField.value);
  checkGuess(userGuess);
});
