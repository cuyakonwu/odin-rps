/*
0 is rock
1 is paper
2 is scissors
*/
const selections = ["rock", "paper", "scissors"];
let playerWins = 0;
let computerWins = 0;

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click', function() {
    playRound(0);
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click', function() {
    playRound(1);
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener('click', function() {
    playRound(2);
});


function playRound (playerSelection) {
    computerSelection = Math.floor(Math.random() * 3);
    rps(playerSelection, computerSelection);
    updateScores();
}

function rps(firstPick, secondPick) {
    if (
        (firstPick === 0 && secondPick === 2) ||
        (firstPick === 1 && secondPick === 0) ||
        (firstPick === 2 && secondPick === 1)
    ) {
        playerWins++;
    } else if (
        (secondPick === 0 && firstPick === 2) ||
        (secondPick === 1 && firstPick === 0) ||
        (secondPick === 2 && firstPick === 1)
    ) {
        computerWins++;
    }
}

function updateScores() {
    const pScore = document.querySelector('#pScore');
    const cScore = document.querySelector('#cScore');
    const winMsg = document.createElement("div");
    pScore.textContent = `Player: ${playerWins}`;
    cScore.textContent = `Computer: ${computerWins}`;
    if (playerWins == 5){
        winMsg.textContent = "Congrats You Won!";
        (document.querySelector("body")).appendChild(winMsg);
    } else if (computerWins == 5){
        winMsg.textContent = "Refresh The Page to Try Again";
        (document.querySelector("body")).appendChild(winMsg);
    }
}