let playerWinCount = 0;
let computerWinCount = 0;

const computerPlay = () => {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let output;
  if (randomNum == 1) {
    output = "Rock";
  }
  if (randomNum == 2) {
    output = "Paper";
  }
  if (randomNum == 3) {
    output = "Scissors";
  }
  return output;
};

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

const game = () => {
  let playerWinCount = 0;
  let computerWinCount = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper or Scissors?");
    computerSelection = computerPlay();
    if (
      playRound(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      ).startsWith("You Win!") == true
    ) {
      playerWinCount++;
      console.log("You Win This Round");
      console.log(
        "Player: " + playerWinCount + " " + "Computer: " + computerWinCount
      );
    }
    if (
      playRound(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      ).startsWith("You Lose!") == true
    ) {
      computerWinCount++;
      console.log("You Lost This Round");
      console.log(
        "Player: " + playerWinCount + " " + "Computer: " + computerWinCount
      );
    }
    if (
      playRound(
        playerSelection.toLowerCase(),
        computerSelection.toLowerCase()
      ).startsWith("You Draw") == true
    ) {
      i--;
      console.log("You Drew This Round");
      console.log(
        "Player: " + playerWinCount + " " + "Computer: " + computerWinCount
      );
    }
  }
  if (playerWinCount > computerWinCount) {
    console.log("You Win This Game! Congratulations.");
  }
  if (computerWinCount > playerWinCount) {
    console.log("You Lose This Game! Unlucky.");
  }
};

console.log(game());
