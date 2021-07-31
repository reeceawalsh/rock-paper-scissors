// Variables
const imgs = document.querySelectorAll(".option");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock2 = document.getElementById("rock2");
const paper2 = document.getElementById("paper2");
const scissors2 = document.getElementById("scissors2");
const playerRock = document.getElementById("playerRock");
const playerScissors = document.getElementById("playerScissors");
const playerPaper = document.getElementById("playerPaper");
const computerRock = document.getElementById("computerRock");
const computerScissors = document.getElementById("computerScissors");
const computerPaper = document.getElementById("computerPaper");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

// Keep track of which player won a round
let playerWinCount = 0;
let computerWinCount = 0;
let playerSelection = "";

// Computers choice of Rock, Paper or Scissors
const computerPlay = () => {
  let choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length - 1) + 1];
};

// Determine player selection
playerRock.addEventListener("click", () => {
  playerSelection = "rock";
  rock.classList.add("shake");
  rock.addEventListener("animationend", removeClass);
  rock.addEventListener("animationend", game);
});

playerPaper.addEventListener("click", () => {
  playerSelection = "paper";
  rock.classList.add("shake");
  rock.addEventListener("animationend", removeClass);
  rock.addEventListener("animationend", game);
});

playerScissors.addEventListener("click", () => {
  playerSelection = "scissors";
  rock.classList.add("shake");
  rock.addEventListener("animationend", removeClass);
  rock.addEventListener("animationend", game);
});

function removeClass() {
  rock.classList.remove("shake");
  rock.classList.remove("show");
  rock.classList.add("hide");
  console.log("hiding");
}

function resetImages() {
  rock.classList.add("hide");
  paper.classList.add("hide");
  scissors.classList.add("hide");
  rock.classList.remove("show");
  paper.classList.remove("show");
  scissors.classList.remove("show");
}

function resetGame() {
  rock.classList.remove("hide");
  rock.classList.add("show");
  paper.classList.remove("show");
  paper.classList.add("hide");
  scissors.classList.remove("show");
  scissors.classList.add("hide");
  rock2.classList.remove("hide");
  rock2.classList.add("show");
  paper2.classList.remove("show");
  paper2.classList.add("hide");
  scissors2.classList.remove("show");
  scissors2.classList.add("hide");
}

function resetImages2() {
  rock2.classList.add("hide");
  paper2.classList.add("hide");
  scissors2.classList.add("hide");
  rock2.classList.remove("show");
  paper2.classList.remove("show");
  scissors2.classList.remove("show");
}

function changePlayerImage() {
  if (playerSelection == "rock") {
    resetImages();
    rock.classList.remove("hide");
    rock.classList.add("show");
  }
  if (playerSelection == "paper") {
    resetImages();
    paper.classList.remove("hide");
    paper.classList.add("show");
  }
  if (playerSelection == "scissors") {
    resetImages();
    scissors.classList.remove("hide");
    scissors.classList.add("show");
  }
}

function changeComputerImage() {
  if (computerSelection == "rock") {
    resetImages2();
    rock2.classList.remove("hide");
    rock2.classList.add("show");
  }
  if (computerSelection == "paper") {
    resetImages2();
    paper2.classList.remove("hide");
    paper2.classList.add("show");
  }
  if (computerSelection == "scissors") {
    resetImages2();
    scissors2.classList.remove("hide");
    scissors2.classList.add("show");
  }
}

function keepScore() {
  playerScore.textContent = "Player: " + playerWinCount;
  computerScore.textContent = "Computer: " + computerWinCount;
}
// imgs.forEach((img) => {
//   img.addEventListener("click", () => {
//     rock.classList.add("shake");
//     rock.addEventListener("animationend", removeClass);
//     rock.addEventListener("animationend", roll);
//   });
// });

// List of outcomes from all the possible choices by computer and player
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == "rock" && computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  }
  if (playerSelection == "rock" && computerSelection == "rock") {
    return "You Draw! Try Again.";
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You Win! Rock beats Scissors";
  }
  if (playerSelection == "paper" && computerSelection == "rock") {
    return "You Win! Paper beats Rock";
  }
  if (playerSelection == "paper" && computerSelection == "paper") {
    return "You Draw! Try again.";
  }
  if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You Lose! Scissors beats Paper.";
  }
  if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You Win! Scissors beats Paper.";
  }
  if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "You Draw! Try again.";
  }
  if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You Lose! Rock beats Scissors.";
  }
};

// game() loops through 'gamelength' amount of times and logs the score and who won that round each time
const game = () => {
  computerSelection = computerPlay().toLowerCase();
  changePlayerImage();
  changeComputerImage();
  setTimeout(resetGame, 1000);
  if (
    playRound(playerSelection, computerSelection).startsWith("You Win!") == true
  ) {
    playerWinCount++;
    console.log("You Win This Round");
    keepScore();
  }
  if (
    playRound(playerSelection, computerSelection).startsWith("You Lose!") ==
    true
  ) {
    computerWinCount++;
    console.log("You Lost This Round");
    keepScore();
  }
  // In order to make the game the best of 5 rounds, the function uses 'i--' here to discount draw rounds.
  if (
    playRound(playerSelection, computerSelection).startsWith("You Draw") == true
  ) {
    console.log("You Drew This Round");
    keepScore();
  }

  // After the loop has finished it will display results based on which win count is higher
  if (
    playerWinCount + computerWinCount == 5 &&
    playerWinCount > computerWinCount
  ) {
    console.log("You Win This Game! Congratulations.");
  }
  if (
    playerWinCount + computerWinCount == 5 &&
    computerWinCount > playerWinCount
  ) {
    console.log("You Lose This Game! Unlucky.");
  }
};

// Animation to shake the rock

// imgs.forEach((img) => {
//   img.addEventListener("click", () => {
//     rock.classList.add("shake");
//     rock.addEventListener("animationend", removeClass);
//     rock.addEventListener("animationend", roll);
//   });
// });

// Click an option and then rock shakes before being replaced by the option that was clicked

function roll() {
  rock.addEventListener("mouseoff", rockRoll);
  paper.addEventListener("mouseoff", paperRoll);
  scissors.addEventListener("mouseoff", scissorsRoll);
}

function rockRoll() {
  rock.classList.remove("hide");
}

function scissorsRoll() {
  scissors.classList.remove("hide");
}

function paperRoll() {
  paper.classList.remove("hide");
}
