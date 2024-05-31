let humanScore = 0;
let computerScore = 0;

let humanScoreSpan = document.getElementById("humanScore");
let computerScoreSpan = document.getElementById("computerScore");
let scoreReport = document.getElementById("scoreReport");
let resetButton = document.getElementById("reset");

humanScoreSpan.textContent = humanScore;
computerScoreSpan.textContent = computerScore;

const rpsButtons = document.getElementsByClassName("rps");
for (let i = 0; i < rpsButtons.length; i++) {
    rpsButtons[i].addEventListener("click", () => playRound(rpsButtons[i].id, getComputerChoice()));
}

// FUNCTIONS
function getComputerChoice () {
    switch (Math.floor (Math.random() * 3)) {   // returns a number from 0 - 2
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
        default:
            console.log("Error computing random number.");
            break;
    } 
}

function playRound (humanChoice, computerChoice) {
    // compute winner
    if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper")
        {
            scoreReport.textContent = "You win!";
            humanScore++;
            humanScoreSpan.textContent = humanScore;
        }
    else if (
        humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock")
        {
            scoreReport.textContent = "You lose...";
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        }
    else {
        scoreReport.textContent = "Its a draw.";
    }
    checkWinner();
}

function checkWinner() {
    let winner = false;
    if (humanScore === 5) {
        scoreReport.textContent += " You have 5 points. Well done!";
        winner = true;
    }
    else if (computerScore === 5) {
        scoreReport.textContent += " I got 5 points. Too bad!";
        winner = true;
    }
    if (winner) {
        for (let i = 0; i < rpsButtons.length; i++) {
            rpsButtons[i].hidden = true;
        }
        resetButton.hidden = false;
    }
}

resetButton.addEventListener("click", () => {
    humanScoreSpan.textContent = computerScoreSpan.textContent = humanScore = computerScore = 0;
    for (let i = 0; i < rpsButtons.length; i++) {
        rpsButtons[i].hidden = false;
    }
    resetButton.hidden = true;
    scoreReport.textContent = "We will play to 5 points. Press a button to get started!";
})