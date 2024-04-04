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

    // Tie case
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "Tie!";
    }

    if (playerSelection == "paper" && computerSelection == "paper") {
        return "Tie!";
    }

    if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Tie!";
    }
}

// Randomly select integer to convert what computer will choose
function opponent() {
    const num = (Math.floor(Math.random() * 12))

    if (num <=3) {
        return 'rock';
    } else if (num <=7) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const playerSelection = (prompt("Make your choice").toLowerCase());
const computerSelection = opponent().toLowerCase();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));