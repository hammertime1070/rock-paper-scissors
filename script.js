function getComputerChoice() {
    var options = ['Rock', 'Paper', 'Scissors'];
    var selection = options[Math.floor(Math.random() * options.length)];
    return selection
}


function playRound(playerSelection, computerSelection) {
    var playerSelection = playerSelection.toUpperCase();
    var computerSelection = computerSelection.toUpperCase();
    var victoryMessage = "You Win! " + playerSelection + " beats " + computerSelection + "!"
    var defeatMessage = "You Lose! " + computerSelection + " beats " + playerSelection + "!"
    var tieMessage = "You Tied!"
    console.log(playerSelection)
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


// function game() {
//     var i = 0;
//     while (i < 5) {
//         let playerSelection = prompt("ROCK PAPER SCISSORS SHOOT!");
//         console.log(playRound(playerSelection=playerSelection, computerSelection=getComputerChoice()));
//         i++;
//     }
// }


// UI Logic
// Player Inputs
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.onclick = () => postResult(playRound(playerSelection = 'ROCK', computerSelection=getComputerChoice()))
paper.onclick = () => postResult(playRound(playerSelection = 'PAPER', computerSelection=getComputerChoice()))
scissors.onclick = () => postResult(playRound(playerSelection='SCISSORS', computerSelection=getComputerChoice()))

// Results Logic
function postResult(message) {
    const results = document.querySelector('#results')
    const content = document.createElement('div')
    content.classList.add('content')
    content.textContent = message
    results.appendChild(content)

}
