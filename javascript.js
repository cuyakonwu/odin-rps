/*
1 is rock
2 is paper
3 is scissors
*/

playerWins = 0
computerWins = 0
const selections = ["rock", "paper", "scissors"]

function getComputerChoice (){
    choice = Math.floor(Math.random() * 3) + 1
    return choice
}

function playRound (playerSelection) {
    computerSelection = getComputerChoice()

    rps(playerSelection, computerSelection)
}

function game () {
    while (playerWins < 5 && computerWins < 5){
        console.log(playerSelection = prompt("rock, paper, or scissors"))
        playRound(selections.indexOf(playerSelection) + 1)
        console.log("Player: " + playerWins + " Computer: " + computerWins)
    }
    if (playerWins > computerWins){
        console.log("Congrats You Won!")
    }
    else {
        console.log("Refresh The Page to Try Again")
    }
}

function rps (firstPick, secondPick) {

    if (firstPick == 1 && secondPick == 3) {
        playerWins++
    }
    else if (firstPick == 3 && secondPick == 1) {
        computerWins++
    }
    else if (firstPick > secondPick) {
        playerWins++
    }
    else{
        computerWins++
    }
}