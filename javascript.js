/*
1 is rock
2 is paper
3 is scissors
*/

playerWins = 0
computerWins = 0
const selections = ["rock", "paper", "scissors"]

function playRound (playerSelection) {
    computerSelection = Math.floor(Math.random() * 3)
    rps(playerSelection, computerSelection)
}

function game () {
    while (playerWins < 5 && computerWins < 5){
        console.log(playerSelection = prompt("rock, paper, or scissors"))
        if (selections.includes(playerSelection)){
            playRound(selections.indexOf(playerSelection))
            console.log("Player: " + playerWins + " Computer: " + computerWins)
        }
        else{
            console.log("Please enter a valid input")
        }
    }
    if (playerWins > computerWins){
        console.log("Congrats You Won!")
    }
    else {
        console.log("Refresh The Page to Try Again")
    }
}

function rps (firstPick, secondPick) {

    if (firstPick == 0 && secondPick == 2) {
        playerWins++
    }
    else if (firstPick == 2 && secondPick == 0) {
        computerWins++
    }
    else if (firstPick > secondPick) {
        playerWins++
    }
    else{
        computerWins++
    }
}