let userScore = 0;
let compScore = 0;
let userWin;
let userChoice;
let compChoice;
const choices = document.querySelectorAll(".choice");
const msgPara = document.querySelector("#msg");

const drawGame = () => {
    msgPara.innerText = `Your choice is ${userChoice}. Computer choice is ${compChoice}. Draw!`;
};

document.querySelector(".reset-btn").addEventListener("click", () => {
    window.location.reload();
});
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

const playGame = (userChoice) => {
    compChoice = generateComputerChoice();
    console.log(userChoice);
    console.log(compChoice);
    
    if(userChoice === compChoice){
        drawGame();
        return; 
    }

    if(userChoice === "rock"){
        userWin = compChoice === "scissors";
    } else if(userChoice === "paper"){
        userWin = compChoice === "rock";
    } else {
        userWin = compChoice === "paper";
    }

    showWinner(userWin);
};


const generateComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        msgPara.innerText = `Your choice is ${userChoice}. Computer choice is ${compChoice}. You Win!`;
    }else {
        compScore++;
        msgPara.innerText = `Your choice is ${userChoice}. Computer choice is ${compChoice}. You Lose!`;
    }
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;
};