const choices = ["rock", "paper", "scissor"];
let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");

const playerScores = document.querySelector(".player");
const computerScores = document.querySelector(".computer");
const result = document.querySelector("#result");
const header = document.querySelector(".header");


playerScores.textContent = "Player: " + playerScore;
computerScores.textContent = "Computer: " + computerScore;


function getComputerChoice() {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function playRound(playerChoice, computerChoice) {
  header.textContent = "Rock Paper Scissor";
  if(computerScore === 5 || playerScore === 5) playGame();
  if (playerChoice === computerChoice) {
    result.textContent = "Tie round!";
    return "Tie round!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissor" && computerChoice === "paper")
  ) {
    playerScore++;
    playerScores.textContent = "Player: " + playerScore;
    
    result.textContent = "You won this round!";
    if (playerScore === 5) {
      header.textContent = "You won the game!";
      result.textContent = "Press any button to play again!";
      return "You won the game!";
    }
    if (playerScore > 5) playGame();

    return "You won this round!";
  }

  computerScore++;
  computerScores.textContent = "Computer: " + computerScore;
  if (computerScore === 5) {
    header.textContent = "You lost the game!";
    result.textContent = "Press any button to play again!";
    
    return "You lost the game!";
  }
  if (computerScore > 5) playGame();

  result.textContent = "You lost this round!";
  return "You lost this round!";
}

function playGame() {
  playerScore = 0;
  computerScore = 0;
  playerScores.textContent = "Player: " + playerScore;
  computerScores.textContent = "Computer: " + computerScore;
  
  header.textContent = "Rock Paper Scissor";
  result.textContent = "Game started!";
}

rock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissor.addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});
