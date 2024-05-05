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
    compSelect = opponent();

    const results1 = document.createElement("div");
    const results2 = document.createElement("div");
    const results3 = document.createElement("div");
    results1.textContent = "Player chooses " + playerSelect + "."
    results2.textContent = "Opponent chooses " + compSelect + "."
    results3.textContent = playRound(playerSelect, compSelect);
    document.body.append(results1);
    document.body.append(results2);
    document.body.append(results3);

})

btn2.addEventListener("click", () => {
    playerSelect = "paper";
    compSelect = opponent();

    const results1 = document.createElement("div");
    const results2 = document.createElement("div");
    const results3 = document.createElement("div");
    results1.textContent = "Player chooses " + playerSelect + "."
    results2.textContent = "Opponent chooses " + compSelect + "."
    results3.textContent = playRound(playerSelect, compSelect);
    document.body.append(results1);
    document.body.append(results2);
    document.body.append(results3);

})

btn3.addEventListener("click", () => {
    playerSelect = "scissors";
    compSelect = opponent();

    const results1 = document.createElement("div");
    const results2 = document.createElement("div");
    const results3 = document.createElement("div");
    results1.textContent = "Player chooses " + playerSelect + "."
    results2.textContent = "Opponent chooses " + compSelect + "."
    results3.textContent = playRound(playerSelect, compSelect);
    document.body.append(results1);
    document.body.append(results2);
    document.body.append(results3);
    
})

function playRound(playerSelect, compSelect) {
    // Player Case
    if (playerSelect == "rock" && compSelect == "scissors") {
        return "You win! Rock beats scissors.";
    }

    if (playerSelect == "paper" && compSelect == "rock") {
        return "You win! Paper beats rock.";
    }

    if (playerSelect == "scissors" && compSelect == "paper") {
        return "You win! Scissors beats paper.";
    }

    // Computer Case
    if (compSelect == "rock" && playerSelect == "scissors") {
        return "You lose! Scissors loses to rock.";
    }

    if (compSelect == "paper" && playerSelect == "rock") {
        return "You lose! Rock loses to paper.";
    }

    if (compSelect == "scissors" && playerSelect == "paper") {
        return "You lose! Paper loses to scissors.";
    }

    // Tie case
    if (playerSelect == "rock" && compSelect == "rock") {
        return "Tie!";
    }

    if (playerSelect == "paper" && compSelect == "paper") {
        return "Tie!";
    }

    if (playerSelect == "scissors" && compSelect == "scissors") {
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
