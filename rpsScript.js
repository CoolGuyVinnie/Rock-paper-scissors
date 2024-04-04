function playRound(playerSelection, computerSelection) {
    // Player Case
    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock beats scissors.";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper beats rock.";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors beats paper.";
    }

    // Computer Case
    if (computerSelection == "rock" && playerSelection == "scissors") {
        return "You lose! Scissors loses to rock.";
    }

    if (computerSelection == "paper" && playerSelection == "rock") {
        return "You lose! Rock loses to paper.";
    }

    if (computerSelection == "scissors" && playerSelection == "paper") {
        return "You lose! Paper loses to scissors.";
    }

}

const playerSelection = (prompt("Make your choice").toLowerCase())
const computerSelection = "scissors";
console.log( (playRound(playerSelection, computerSelection)));