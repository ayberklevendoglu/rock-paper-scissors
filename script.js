const arr = ["rock", "paper", "scissor"];
let pScore = 0;
let cScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  return arr[randomNumber];
}

function playRound(pS, cS) {
  if (pS === cS) {
    return "Tie round!";
  } else if (
    (pS == "rock" && cS == "scissor") ||
    (pS == "paper" && cS == "rock") ||
    (pS == "scissor" && cS == "paper")
  ) {
    pScore++;
    return "You Won this round!";
  } else {
    cScore++;
    return "You Lost this round!";
  }
}

function game() {
  pScore = 0;
  cScore = 0;
  for (let i = 1; i < 6; i++) {
    const playerSelection = prompt("Rock paper or scissor?").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    playRound();
  }
  if (pScore == cScore) {
    console.log("It's a tie!");
  } else if (pScore > cScore) {
    console.log("Player wins the game!");
  } else {
    console.log("Computer wins the game!");
  }
}
