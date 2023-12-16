/*
0 is rock
1 is paper
2 is scissors
*/

const selections = ["Rock", "Paper", "Scissors"];

const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');
const pSelect = document.querySelector('#pSelect');
const cSelect = document.querySelector('#cSelect');

let winMsg = document.querySelector("#winMsg");

let playerWins = 0;
let computerWins = 0;

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener('click', () => {
    if (playerWins < 5 && computerWins < 5){
        playRound(0);
    } else {
        winMsg.textContent = "Game Over! Refresh to play again";
    }
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener('click', () => {
    if (playerWins < 5 && computerWins < 5){
        playRound(1);
    } else {
        winMsg.textContent = "Game Over! Refresh to play again";
    }
});

const scissorsBtn = document.querySelector("#scissorsBtn");
scissorsBtn.addEventListener('click', () => {
    if (playerWins < 5 && computerWins < 5){
        playRound(2);
    } else {
        winMsg.textContent = "Game Over! Refresh to play again";
    }
});


function playRound (playerSelection) {
    computerSelection = Math.floor(Math.random() * 3);

    rps(playerSelection, computerSelection);

    pSelect.textContent = `You selected: ${selections[playerSelection]}`
    cSelect.textContent = `COM selected: ${selections[computerSelection]}`

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
    pScore.textContent = `Player: ${playerWins}`;
    pScore.appendChild(pSelect);
    cScore.textContent = `Computer: ${computerWins}`;
    cScore.appendChild(cSelect);

    if (playerWins == 5){
        winMsg.textContent = "Congrats You Won!";
    } else if (computerWins == 5){
        winMsg.textContent = "Game Over! Refresh to play again";
    }
}