const weapons = ["rock", "paper", "scissors"];
let myScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const computerWeapon = document.getElementById("computerWeapon");
const msg = document.getElementById("msg");
const score = document.getElementById("score");

rockBtn.addEventListener("click", () => startGame("rock"));
paperBtn.addEventListener("click", () => startGame("paper"));
scissorsBtn.addEventListener("click", () => startGame("scissors"));

function startGame(playerWeapon) {
    const computerSelection = getRandomWeapon();
    playRound(playerWeapon, computerSelection);
    updateWeapon(computerSelection);
    updateScore();

    if (isGameOver()) {
        setTimeout(() => {
            showGameOverMsg(); 
            resetGame();
        }, 100); 
    }
}

function getRandomWeapon() {
    let randomNum = Math.floor(Math.random() * weapons.length);
    return weapons[randomNum];
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
    msg.innerText = text;
}

function updateWeapon(computerSelection) {
    switch(computerSelection) {
        case "rock":
            computerWeapon.innerHTML = "&#9994";
            break;
        case "paper":
            computerWeapon.innerHTML = "&#9995";
            break;
        case "scissors":
            computerWeapon.innerHTML = "&#9996";
            break;
    }
}

function updateScore() {
    score.innerText = `${myScore} : ${computerScore}`;
}

function isGameOver() {
    return myScore === 5 || computerScore === 5;
}

function showGameOverMsg() {
    if (myScore === 5)
        alert(`You win! Play again!`);
    else
        alert(`You Lose... Play again!`);
}

function resetGame() {
    msg.innerText = "Ready ?";
    myScore = 0;
    computerScore = 0;
    updateScore();

    computerWeapon.innerHTML = "&#x3F";
}