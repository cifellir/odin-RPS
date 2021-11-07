let computerScore = 0;
let playerScore = 0;
const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound (playerSelection, computerSelection) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection == playerSelection) {
        displayResults("Tie Game!");
    } else if (
        (computerSelection == "rock" && playerSelection == "scissors") ||
        (computerSelection == "scissors" && playerSelection == "paper") ||
        (computerSelection == "paper" && playerSelection == "rock")
    ) {
        computerScore = ++computerScore;
        keepCpuScore();
        if (computerScore === 1) {
            displayResults(
                `Oh no! You lost. ${capitalize(computerSelection)} beats ${playerSelection}.`
            );
        } else if (computerScore === 2) {
            displayResults(
            `Arghh. ${capitalize(computerSelection)} beats ${playerSelection}. Give it another shot!`
            );
        } else if (computerScore === 3) {
            displayResults(
                `${capitalize(computerSelection)} beats ${playerSelection}. It's ok. You got this!`
            );
        } else if (computerScore === 4) {
            displayResults(
                `Oh no. It's match point! ${capitalize(computerSelection)} beats ${playerSelection}.`
            );
        } else {
            displayResults(`${computerSelectoin} beats ${playerSElection}`);
        }
    } else {
        playerScore = ++playerScore;
        keepPlayerScore();
        if (playerScore === 1) {
            displayResults(
            `Lets go!! You won. ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        } else if (playerScore === 2) {
            displayResults(
                `You're pretty good at this. ${capitalize(playerSelection)} beats ${computerSelection}`
            );
        } else if (playerScore === 3) {
            displayResults(
                `${capitalize(playerSelection)} beats ${computerSelection}!`
            );
        } else if (playerScore === 4) {
            displayResults(
                `${capitalize(playerSelection)} beats ${computerSelection}. One more and you win!`
            );
        } else {
            displayResults(`${playerSelection} beats ${computerSelection}`);
        } 
    }
}
function keepPlayerScore() {
    let playerScoreBox = document.querySelector("#player-score");
    playerScoreBox.textContent = playerScore;
}
function keepCpuScore() {
    let computerScoreBox = document.querySelector("#computer-score");
    computerScoreBox.textContent = computerScore;
}

function displayResults(str) {
    alert.textContent = str;
  }


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
