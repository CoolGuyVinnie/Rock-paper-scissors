/* // User Prompt
const playerSelection = (prompt("Make your choice").toLowerCase());
const computerSelection = opponent().toLowerCase(); */

// Global variables
let playerSelect;
let compSelect;

// Reference to buttons in HTML
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// Buttons
btn1.addEventListener("click", () => {
    playerSelect = "rock";
    alert("You've selected rock");
    compSelect = "scissors"

    // Round display and game call function
    console.log('Player chooses ' + playerSelect);
    console.log('Opponent chooses ' + compSelect);

    console.log(playRound(playerSelect, compSelect));
})

btn2.addEventListener("click", () => {
    playerSelect = "paper";
    alert("You've selected paper");

})

btn3.addEventListener("click", () => {
    playerSelect = "scissors";
    alert("You've selected scissors");

})


function playRound(playerSelect, compSelect) {
    // Player Case
    if (playerSelect == "rock" && compSelect == "scissors") {
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