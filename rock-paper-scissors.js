// returns a number from 0 - 2
function getComputerResult () {
    return Math.floor (Math.random() * 3);
}

function getHumanResult () {
    result = prompt ('Type "rock", "paper" or "scissors".')
    switch (result.toLowerCase()) {
        case "rock":
            return 0;
            break;
        case "paper":
            return 1;
            break;
        case "scissors":
            return 2;
            break;
        default:
            alert("please enter a valid option.");
            getHumanResult();
    }
}