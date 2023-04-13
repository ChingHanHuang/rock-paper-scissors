const CHOICES = ["rock", "paper", "scissors"];

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    if(CHOICES.includes(playerChoice))
        return playerChoice;
    throw "Please choose again.";
}

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "It is tie!";

    if(playerSelection === "rock") {
        if(computerSelection === "scissors")
            return "You Win! Rock beats Scissors.";
        return "You Lose! Paper beats Rock.";
    }
    else if(playerSelection === "paper") {
        if(computerSelection === "rock")
            return "You Win! Paper beats Rock.";
        return "You Lose! Scissors beats Paper.";
    }
    else {
        if(computerSelection === "paper")
            return "You Win! Scissors beats Paper.";
        return "You Lose! Rock beats Scissors.";
    }
}

function game() {
    let rounds = 5;
    while(rounds > 0) {
        try {
            let playerSelection = getPlayerChoice();
            let computerSelection = getComputerChoice();

            console.log(rounds + ", " + playerSelection + ", " + computerSelection);
            console.log(playRound(playerSelection.toLowerCase(), computerSelection));
            rounds--;

        } catch(err) {
            alert(err);
            continue;
        }
    }
    return;
}

game();