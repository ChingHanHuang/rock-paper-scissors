const choices = ["rock", "paper", "scissors"];
let myScore = 0;
let computerScore = 0;

function game(playerWeapon) {
    playRound(playerWeapon, getComputerWeapon());
    updateScore();
    checkGameOver();
}

function getComputerWeapon() {
    let weapon = choices[Math.floor(Math.random() * choices.length)];
    let computerWeapon = document.getElementById("computerWeapon");
    computerWeapon.src = `img/${weapon}.png`;
    return weapon;
}

function playRound(playerWeapon, computerWeapon) {
    let text;
    if (playerWeapon === computerWeapon) {
        text = "It is tie! No one gets the point!";
    } 
    else if(playerWeapon === "rock") {
        if(computerWeapon === "scissors") {
            myScore++;
            text = "Yes! Rock beats Scissors.";
        } else {
            computerScore++;
            text = "On no! Paper beats Rock.";
        }
    }
    else if(playerWeapon === "paper") {
        if(computerWeapon === "rock") {
            myScore++;
            text = "Yes! Paper beats Rock.";
        } else {
            computerScore++;
            text = "On no! Scissors beats Paper.";
        }
    }
    else {
        if(computerWeapon === "paper") {
            myScore++;
            text = "Yes! Scissors beats Paper.";
        } else {
            computerScore++;
            text = "On no! Rock beats Scissors.";
        }
    }
    document.getElementById("msg").innerText = text;
}

function updateScore() {
    document.getElementById("score").innerText = `${myScore} : ${computerScore}`;
}

function checkGameOver() {
    if (myScore === 5){
        document.getElementById("msg").innerText = "You win!";
    } else if (computerScore === 5) {
        document.getElementById("msg").innerText = "You Lose...";
    }
}