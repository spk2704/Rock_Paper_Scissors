document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));
const userCount = document.getElementById("count-user").querySelector("span");
const robotCount = document.getElementById("count-robot").querySelector("span");
const userResult = document.getElementById("result-user");
const robotResult = document.getElementById("result-robot");
const finalResult = document.getElementById("final-result");
const whoWins = document.getElementById("who-wins");
const playAgain = document.querySelector(".play-again");
const resetBtn = document.getElementById("reset-button");
const results = document.querySelector(".results");
const images = document.querySelector(".images-container");


const choices = ["rock", "paper", "scissors"];
let userScore = 0;
let robotScore = 0;


const playGame = (userChoice) => {
    const robotChoice = choices[Math.floor(Math.random() * 3)];

    if (userChoice === robotChoice) {
        userResult.innerHTML = `You chose ${userChoice}`;
        robotResult.innerHTML = `Robot chose ${robotChoice}`;
        finalResult.innerHTML = "It's a tie";
    } else if (
        (userChoice === "rock" && robotChoice === "scissors") ||
        (userChoice === "paper" && robotChoice === "rock") ||
        (userChoice === "scissors" && robotChoice === "paper")
    ) {
        userResult.innerHTML = `You chose ${userChoice}`;
        robotResult.innerHTML = `Robot chose ${robotChoice}`;
        finalResult.innerHTML = `You win, ${userChoice} beats ${robotChoice}`;
        userScore++;
    } else {
        userResult.innerHTML = `You chose ${userChoice}`;
        robotResult.innerHTML = `Robot chose ${robotChoice}`;
        finalResult.innerHTML = `You lose, ${robotChoice} beats ${userChoice}`;
        robotScore++;
    }

    userCount.innerHTML = userScore;
    robotCount.innerHTML = robotScore;

    whoWon();
}  


const whoWon = () => {
    if (userScore === 3) {
        whoWins.innerHTML = "YOU WON! COMPUTER LOST!";
        playAgainOption();
    } else if (robotScore === 3) {
        whoWins.innerHTML = "YOU LOST! COMPUTER WON!";
        playAgainOption();
    }
} 


const playAgainOption = (user) => {
    images.style.display = "none";
    results.style.display = "none";
    playAgain.style.display = "block";
}


resetBtn.addEventListener("click", () => {
    userScore = 0;
    robotScore = 0;
    userCount.innerHTML = userScore;
    robotCount.innerHTML = robotScore;
    userResult.innerHTML = "";
    robotResult.innerHTML = "";
    finalResult.innerHTML = "";
    whoWins.innerHTML = "";
    images.style.display = "grid";
    results.style.display = "block";
    playAgain.style.display = "none";
})