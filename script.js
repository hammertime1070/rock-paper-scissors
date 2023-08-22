function getComputerChoice() {
    var options = ['Rock', 'Paper', 'Scissors'];
    var selection = options[Math.floor(Math.random() * options.length)];
    return selection
}


function SingleRound(playerSelection, computerSelection) {
    var playerSelection = playerSelection.toUpperCase();
    var computerSelection = computerSelection.toUpperCase();
    var victoryMessage = "You Win! " + playerSelection + " beats " + computerSelection + "!"
    var defeatMessage = "You Lose! " + computerSelection + " beats " + playerSelection + "!"
    var tieMessage = "You Tied!"
    if (playerSelection === computerSelection) {
        return tieMessage
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            return victoryMessage
        }
        else {
            return defeatMessage
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return victoryMessage
        }
        else {
            return defeatMessage
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            return victoryMessage
        }
        else {
            return defeatMessage
        }
    }
}


function game() {
    var i = 0;
    while (i < 5) {
        let playerSelection = prompt("ROCK PAPER SCISSORS SHOOT!");
        console.log(SingleRound(playerSelection=playerSelection, computerSelection=getComputerChoice()));
        i++;
    }
}

game()