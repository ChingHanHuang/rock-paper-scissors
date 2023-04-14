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
            text = "You Win! Rock beats Scissors.";
            return;
        }
        computerScore++;
        text = "You Lose! Paper beats Rock.";
    }
    else if(playerWeapon === "paper") {
        if(computerWeapon === "rock") {
            myScore++;
            text = "You Win! Paper beats Rock.";
            return;
        }
        computerScore++;
        text = "You Lose! Scissors beats Paper.";
    }
    else {
        if(computerWeapon === "paper") {
            myScore++;
            text = "You Win! Scissors beats Paper.";
            return;
        }
        computerScore++;
        text = "You Lose! Rock beats Scissors.";
    }
    document.getElementById("msg").innerText = text;
}

function updateScore() {
    document.getElementById("score").innerText = `${myScore} : ${computerScore}`;
}

function checkGameOver() {
    if (myScore === 5){
        console.log("You win!");
    } else if (computerScore === 5) {
        console.log("You Lose...");
    }
}