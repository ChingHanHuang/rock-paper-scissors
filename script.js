const choices = ["rock", "paper", "scissors"];

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, Scissors?").toLowerCase();
    if(choices.includes(playerChoice))
        return playerChoice;
    throw "Please choose again.";
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
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
        let playerSelection;
        try {
            playerSelection = getPlayerChoice();
        } catch(err) {
            alert(err);
            continue;
        }
        
        const computerSelection = getComputerChoice();

        console.log(rounds + ", " + playerSelection + ", " + computerSelection);
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        rounds--;
    }
}

game();