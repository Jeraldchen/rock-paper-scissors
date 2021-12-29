function computerPlay() {
    let x = Math.floor(Math.random() * 10);
    if (x % 3 === 1) {
        return "rock";
    }
    if (x % 3 == 2) {
        return "paper";
    }
    return "scissors";
}

function playRound(computerSelection, playerSelection) {
    let runningScore = "";
    if ((computerSelection == 'rock' && playerSelection == 'scissors') || (computerSelection == 'paper' && playerSelection == 'rock') || (computerSelection == 'scissors' && playerSelection == 'paper')) {
        computerScore += 1;
        runningScore = "You lose! " + "Player Score: " + playerScore + " Computer Score: " + computerScore;
        if (computerScore == 5) {
            runningScore = "The computer won! " + "Player Score: " + playerScore + " Computer Score: " + computerScore;
        }
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1;
        runningScore = "You won! " + "Player Score: " + playerScore + " Computer Score: " + computerScore;
        if (playerScore == 5) {
            runningScore = "Congratulations! You beat the computer! " + "Player Score: " + playerScore + " Computer Score: " + computerScore;
        }
    } else {
        runningScore = "It's a draw! " + "Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
    document.getElementById('results').innerHTML = runningScore;
    return;

}

let playerScore = 0;
let computerScore = 0;
const buttons =  document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', function(){
        playRound(computerPlay(), button.id);
    });
});