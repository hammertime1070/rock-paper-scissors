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
        postResult(tieMessage)
        setScore(0,0)
    }
    else if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
             postResult(victoryMessage)
             setScore(1,0)
        }
        else {
            postResult(defeatMessage)
            setScore(0,1)
        }
    }
    else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            postResult(victoryMessage)
            setScore(1,0)
        }
        else {
            postResult(defeatMessage)
            setScore(0,1)
        }
    }
    else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            postResult(victoryMessage)
            setScore(1,0)
        }
        else {
            postResult(defeatMessage)
            setScore(0,1)
        }
    }
}



// UI Logic
// Player Inputs
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')

rock.onclick = () => playRound(playerSelection = 'ROCK', computerSelection=getComputerChoice())
paper.onclick = () => playRound(playerSelection = 'PAPER', computerSelection=getComputerChoice())
scissors.onclick = () => playRound(playerSelection='SCISSORS', computerSelection=getComputerChoice())

// Results Logic
function postResult(message) {
    const results = document.querySelector('#results')
    const content = document.createElement('div')
    content.classList.add('content')
    content.textContent = message
    results.appendChild(content)

}

let totalPlayerScore = 0;
let totalComputerScore = 0;

function setScore(playerScore, computerScore) {
    totalPlayerScore += playerScore;
    totalComputerScore += computerScore;
    console.log(`Player Score is ${totalPlayerScore}`)
    console.log(`Computer Score is ${totalComputerScore}`)

}

// Currently Score is working correct just need to make a function to make a game until one player reaches the score of 5
