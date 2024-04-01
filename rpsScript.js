function playRound(playerSelection, computerSelection) {
    if ( (playerSelection == "paper") && (computerSelection == "rock") ) {
        return "You win! Paper beats rock.";
    }
}

const playerSelection = (prompt("Make your choice").toLowerCase())
const computerSelection = "rock";
console.log( (playRound(playerSelection, computerSelection)));