let playerScore = 0;
let computerScore = 0;
const buttons =  document.querySelectorAll('button');

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
        runningScore = "You: " + playerSelection + " VS " + "Computer: " + computerSelection + "<br><br>You lose! " + "<br><br>Player Score: " + playerScore + " Computer Score: " + computerScore;
        if (computerScore == 5) {
            runningScore = "The computer won! " + "<br><br>Player Score: " + playerScore + " Computer Score: " + computerScore + "<br><br> Refresh the page to play again!";
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'paper' && computerSelection == 'rock') || (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore += 1;
        runningScore = "You: " + playerSelection + " VS " + "Computer: " + computerSelection + "<br><br>You won! " + "<br><br>Player Score: " + playerScore + " Computer Score: " + computerScore;
        if (playerScore == 5) {
            runningScore = "Congratulations! You beat the computer! " + "<br><br>Player Score: " + playerScore + " Computer Score: " + computerScore + "<br><br> Refresh the page to play again!";
            buttons.forEach(button => {
                button.disabled = true;
            });
        }
    } else {
        runningScore = "You: " + playerSelection + " VS " + "Computer: " + computerSelection + "<br><br>It's a draw! " + "<br><br>Player Score: " + playerScore + " Computer Score: " + computerScore;
    }
    document.getElementById('results').innerHTML = runningScore;
    return;

}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(computerPlay(), button.id);
    });
});