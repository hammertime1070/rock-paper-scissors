function getComputerChoice() {
    var options = ['Rock', 'Paper', 'Scissors'];
    console.log(options);
    var selection = options[Math.floor(Math.random() * options.length)];
    return selection
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("You tied!")
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        console.log('You Win! Scissors beats Paper!')
    }
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        console.log('You lose! Rock beats Scissors!')
    }

}

function otherSingleRound(playerSelection, computerSelection) {
    var playerSelection = playerSelection.toUpperCase();
    var computerSelection = computerSelection.toUpperCase();
    var victoryMessage = "You Win! " + playerSelection + " beats " + computerSelection + "!"
    var defeatMessage = "You Lose! " + computerSelection + " beats " + playerSelection + "!"
    var tieMessage = "You Tied!"
    if (playerSelection === computerSelection) {
        return tieMessage
    }
    else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return victoryMessage
        }
        else {
            return defeatMessage
        }
    }
    else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return victoryMessage
        }
        else {
            return defeatMessage
        }
    }
    else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Paper') {
            return victoryMessage
        }
        else {
            return defeatMessage
        }
    }
}


