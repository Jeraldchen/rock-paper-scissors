function computerPlay() {
    let x = Math.floor(Math.random() * 10);
    if (x % 3 === 1) {
        return "Rock";
    }
    if (x % 3 == 2) {
        return "Paper";
    }
    return "Scissors";
}

function playRound(playerSelection, computerSelection) { //-1, 0, 1 means player lose, draw and win respectively
    let str1 = playerSelection.toLowerCase();
    let str2 = computerSelection.toLowerCase();
    if (str1 === "rock" && str2 === "paper") {
        return -1;
    }
    if (str1 === "paper" && str2 === "paper") {
        return 0;
    }
    if (str1 === "scissors" && str2 === "paper") {
        return 1;
    }
    if (str1 === "rock" && str2 === "rock") {
        return 0;
    }
    if (str1 === "paper" && str2 === "rock") {
        return 1;
    }
    if (str1 === "scissors" && str2 === "rock") {
        return -1;
    }
    if (str1 === "rock" && str2 === "scissors") {
        return 1;
    }
    if (str1 === "paper" && str2 === "scissors") {
        return -1;
    }
    if (str1 === "scissors" && str2 === "scissors") {
        return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper or scissors!");
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if (result == -1) {
            computerScore += 1;
            console.log("You lose!");
        } else if (result == 1) {
            playerScore += 1;
            console.log("You Won!");
        } else {
            console.log("It's a draw!");
        }
    }
    if (playerScore == computerScore) {
        console.log("It's a draw!");
    } else if (playerScore > computerScore) {
        console.log("You won the game!");
    } else {
        console.log("You lost the game :(");
    }
}

game();