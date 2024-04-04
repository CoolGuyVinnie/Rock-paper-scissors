function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    }

}

const playerSelection = (prompt("Make your choice").toLowerCase())
const computerSelection = "scissors";
console.log( (playRound(playerSelection, computerSelection)));