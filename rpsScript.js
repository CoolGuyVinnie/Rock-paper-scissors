// Global variables
let playerSelect;
let compSelect;
let i = 1;
let playerScore = 0;
let compScore = 0;

// Reference to buttons in HTML
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

// Buttons
btn1.addEventListener("click", () => {

    playerSelect = "rock";
    compSelect = opponent();

    if (compSelect == 'scissors') {
        playerScore++;
       } else if (compSelect == 'paper') {
           compScore++;
       }

    const results0 = document.createElement("div");
    const results1 = document.createElement("div");
    const results2 = document.createElement("div");
    const results3 = document.createElement("div");
    results0.textContent = "Player Score: " + playerScore + " " + "Opponent Score: " + compScore;
    results1.textContent = "Player chooses " + playerSelect + "."
    results2.textContent = "Opponent chooses " + compSelect + "."
    results3.textContent = playRound(playerSelect, compSelect);
    document.body.append(results0);
    document.body.append(results1);
    document.body.append(results2);
    document.body.append(results3);

    winner(playerScore, compScore);

    i++;
})

btn2.addEventListener("click", () => {
    playerSelect = "paper";
    compSelect = opponent();

    if (compSelect == 'rock') {
        playerScore++;
       } else if (compSelect == 'scissors') {
           compScore++;
       }

    const results0 = document.createElement("div");
    const results1 = document.createElement("div");
    const results2 = document.createElement("div");
    const results3 = document.createElement("div");
    results0.textContent = "Player Score: " + playerScore + " " + "Opponent Score: " + compScore;
    results1.textContent = "Player chooses " + playerSelect + "."
    results2.textContent = "Opponent chooses " + compSelect + "."
    results3.textContent = playRound(playerSelect, compSelect);
    document.body.append(results0);
    document.body.append(results1);
    document.body.append(results2);
    document.body.append(results3);

    winner(playerScore, compScore);

    i++;
})

btn3.addEventListener("click", () => {
    playerSelect = "scissors";
    compSelect = opponent();

    if (compSelect == 'paper') {
        playerScore++;
       } else if (compSelect == 'rock') {
           compScore++;
       }

    const results0 = document.createElement("div");
    const results1 = document.createElement("div");
    const results2 = document.createElement("div");
    const results3 = document.createElement("div");
    results0.textContent = "Player Score: " + playerScore + " " + "Opponent Score: " + compScore;
    results1.textContent = "Player chooses " + playerSelect + "."
    results2.textContent = "Opponent chooses " + compSelect + "."
    results3.textContent = playRound(playerSelect, compSelect);
    document.body.append(results0);
    document.body.append(results1);
    document.body.append(results2);
    document.body.append(results3);

    winner(playerScore, compScore);

    i++;
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

function winner(player, opponent) {
    if (player == 5) {
        const announcement = document.createElement("div");
        announcement.textContent = "PLAYER HAS WON 5 ROUNDS";
        document.body.append(announcement);
    } else if (opponent == 5) {
        const announcement = document.createElement("div");
        announcement.textContent = "COMPUTER HAS WON 5 ROUNDS";
        document.body.append(announcement);
    }
}
