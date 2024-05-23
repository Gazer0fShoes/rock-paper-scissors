let humanScore = 0;
let computerScore = 0;

playGame(input ("How many rounds of rock-paper-scissors would you like to play?"));

// FUNCTIONS
function getHumanChoice () {
    let result = prompt ('Type "rock", "paper" or "scissors".')
    result = result.toLowerCase();
    if (result == "rock" || result == "paper" || result == "scissors") {
        return result;
    }
    else {
        alert("please enter a valid option.");
        getHumanChoice();
    }
}

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

function playGame (rounds) {
    // makes sure rounds is a number
    rounds = +rounds;
    while (rounds != rounds) {
        rounds = input ("Please enter a valid numeric integer. How many rounds?");
    }

    // plays the specified number of rounds
    for (let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    
    // shows the final result
    if (rounds === 1) alert(`The 1 round is over. The final score is ${humanScore}:${computerScore}.`)
    else alert(`The ${rounds} rounds are over. The final score is ${humanScore}:${computerScore}.`);
    
    // round function
    function playRound (humanChoice, computerChoice) {
        // print choices
        console.log(`You throw ${humanChoice}`);
        console.log(`I throw ${computerChoice}`);
    
        // compute winner
        if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper")
            {
                console.log("You win!");
                humanScore++;
            }
        else if (
            humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "rock")
            {
                console.log("You lose.");
                computerScore++;
            }
        else {
            console.log("It's a draw.");
        }
    
        // print score
        () => {
            if (humanScore > computerScore) {
                console.log (`The score is ${humanScore}:${computerScore} to you.`);
            }
            else if (computerScore > humanScore) {
                console.log (`The score is ${humanScore}:${computerScore} to me.`);
            }
            else {
                console.log (`The score is ${humanScore}:${computerScore}. It's a draw.`);
            }
        }
    }
}