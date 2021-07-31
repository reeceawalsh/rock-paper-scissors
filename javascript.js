// These variables are three pictures which will be displayed in the large box above the three smaller images. I need these variables so that I can show the option the player or computer picks and hide the other options.
const largeImages = document.getElementsByClassName("largeImg");
const bothRocks = document.getElementsByClassName("rock");
const bothPapers = document.getElementsByClassName("paper");
const bothScissors = document.getElementsByClassName("scissors");

// These variables are the three smaller images under the large image. They will be clickable, the option chosen will be displayed in the large box above them.
const playerRock = document.getElementById("playerRock");
const playerScissors = document.getElementById("playerScissors");
const playerPaper = document.getElementById("playerPaper");

// Start a new game
const newGameBtn = document.getElementById("startNewGame");

// These variables will be used to update and display the score to the player.
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const roundComment = document.getElementById("roundComment");

// Keep track of the player's and computer's score.
let playerWinCount = 0;
let computerWinCount = 0;
let roundResult = "";
let roundAmount;
let readyToPlay = false;

// How many rounds the player wants to play.
const roundOptions = document.getElementsByClassName("roundOption");
const lowRound = document.getElementById("lowRound");
const medRound = document.getElementById("medRound");
const highRound = document.getElementById("highRound");

// Changes the roundAmount based on what the player choses. Also highlights the player's choice until a different round amount is picked.
lowRound.addEventListener("click", () => {
  roundAmount = parseInt(lowRound.textContent, 10);
  newGame();
  readyToPlay = true;
  removeSelectedClass();
  lowRound.classList.add("selected");
});
medRound.addEventListener("click", () => {
  roundAmount = parseInt(medRound.textContent, 10);
  newGame();
  readyToPlay = true;
  removeSelectedClass();
  medRound.classList.add("selected");
});
highRound.addEventListener("click", () => {
  roundAmount = parseInt(highRound.textContent, 10);
  newGame();
  readyToPlay = true;
  removeSelectedClass();
  highRound.classList.add("selected");
});

// Computers random choice of Rock, Paper or Scissors.
const computerPlay = () => {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length - 1) + 1];
};

// Determine player selection by which of the smaller images the player selected.
playerRock.addEventListener("click", () => {
  if (readyToPlay) {
    playerSelection = "rock";
    shake();
  } else {
    prompt("You need to pick a round limit in the bottom right first.");
  }
});
playerPaper.addEventListener("click", () => {
  if (readyToPlay) {
    playerSelection = "paper";
    shake();
  } else {
    prompt("You need to pick a round limit in the bottom right first.");
  }
});
playerScissors.addEventListener("click", () => {
  if (readyToPlay) {
    playerSelection = "scissors";
    shake();
  } else {
    prompt("You need to pick a round limit in the bottom right first.");
  }
});

// The shake function will make the large rock image shake by adding a class that has an animation. This is to simulate the start of a rock, paper, scissors game. After the animation has ended, it will remove the shake class from both the players and the computers large rock. After the loop has ended, and the animation has ended for both rocks, the game function will begin.
const shake = () => {
  for (let i = 0; i < bothRocks.length; i++) {
    bothRocks[i].classList.add("shake");
    bothRocks[i].addEventListener("animationend", removeShakeClass);
  }
  bothRocks[0].addEventListener("animationend", game);
};

// Removes the shake class, ending the animation.
const removeShakeClass = () => {
  for (let i = 0; i < bothRocks.length; i++) {
    bothRocks[i].classList.remove("shake");
  }
};

// Removes the selected class from the unselected round amount
const removeSelectedClass = () => {
  for (let i = 0; i < roundOptions.length; i++) {
    roundOptions[i].classList.remove("selected");
  }
};

// Runs the reset images function in order to hide all of the images, then it removes the hide class from the images the player and the computer chose.
const changeImages = () => {
  resetImages();
  document.getElementById(playerSelection).classList.remove("hide");
  document.getElementById(computerSelection + "2").classList.remove("hide");
};

// Hides all of the images, ready for the chosen image to be displayed.
const resetImages = () => {
  for (let i = 0; i < largeImages.length; i++) {
    largeImages[i].classList.add("hide");
  }
};

// Runs the reset image function in order to hide all of the images, then removes the hide class from both rocks in order to display them. This is the display that we want before we start the game again.
const resetGame = () => {
  resetImages();
  for (let i = 0; i < bothRocks.length; i++) {
    bothRocks[i].classList.remove("hide");
  }
};

// Updates the player's and computer's score.
const keepScore = () => {
  playerScore.textContent = "Player: " + playerWinCount;
  computerScore.textContent = "Computer: " + computerWinCount;
};

const resetScore = () => {
  playerWinCount = 0;
  computerWinCount = 0;
  keepScore();
};

// List of outcomes from all the possible choices by computer and player. The function checks who won, updates the comment to inform the user and updates the win count so that the score can be updated.
const playRound = () => {
  if (playerSelection == "rock" && computerSelection == "paper") {
    roundComment.textContent = "You lose! Paper beats Rock";
    computerWinCount++;
  }
  if (playerSelection == "rock" && computerSelection == "rock") {
    roundComment.textContent = "You draw! Try again.";
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    roundComment.textContent = "You win! Rock beats Scissors";
    playerWinCount++;
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    roundComment.textContent = "You win! Paper beats Rock";
    playerWinCount++;
  }
  if (playerSelection == "paper" && computerSelection == "paper") {
    roundComment.textContent = "You draw! Try again.";
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    roundComment.textContent = "You lose! Scissors beats Paper.";
    computerWinCount++;
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    roundComment.textContent = "You win! Scissors beats Paper.";
    playerWinCount++;
  }
  if (playerSelection == "scissors" && computerSelection == "scissors") {
    roundComment.textContent = "You draw! Try again.";
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    roundComment.textContent = "You lose! Rock beats Scissors.";
    computerWinCount++;
  }
  if (playerWinCount == roundAmount || computerWinCount == roundAmount) {
    endOfGame();
  }
};
const newGame = () => {
  resetScore();
  removeSelectedClass();
  readyToPlay = false;
  roundComment.textContent = "Pick A Round Limit and Play";
};

newGameBtn.addEventListener("click", newGame);

const endOfGame = () => {
  console.log("round amount " + roundAmount);
  console.log("computerwinamount" + computerWinCount);
  console.log("playerwinamount" + playerWinCount);
  if (playerWinCount > computerWinCount) {
    roundComment.textContent = "Winner! Click Below To Play Again";
  } else {
    roundComment.textContent = "Loser! Click Below To Try Again";
  }
};
// Identifies computer selection, changes the images to the images the player and computer chose, plays a round to work out who won, updates the score and then resets the game a second after.
const game = () => {
  computerSelection = computerPlay().toLowerCase();
  changeImages();
  playRound();
  keepScore();
  setTimeout(resetGame, 1000);
};

// There is currently no round limit set up or special message displayed when a side gets to a certain point.
