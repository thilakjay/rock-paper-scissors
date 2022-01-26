let pScore = 0;
let cScore = 0;

let roundText = document.getElementById("round-description");
let pScoreBoard = document.getElementById("player-score");
let cScoreBoard = document.getElementById("computer-score");

let buttons = document.querySelectorAll("input[type='image']");

for(let button of buttons){
    button.addEventListener("click", game);
}

function computerPlay() {

    let randomNumber = Math.floor(Math.random()*3+1);
    let result = "";

    if(randomNumber === 1) result = "rock";
    else if(randomNumber === 2) result = "paper";
    else result = "scissors";

    return result;
}

function playRound(pSelection, cSelection) {

    //REFACTOR: some of these conditionals can be merged with || operator
    if(pSelection === "rock"){
        if(cSelection === "paper") {
            cScore++;
            return "You Lose! Paper beats Rock!";
        }else if(cSelection === "scissors") {
            pScore++;
            return "You Win! Rock beats Scissors!";
        }else {
            return "Tie! Rock and Rock!";
        }
    }else if(pSelection === "paper"){
        if(cSelection === "rock") {
            pScore++;
            return "You Win! Paper beats Rock!";
        }else if(cSelection === "scissors") {
            cScore++;
            return "You Lose! Scissors beats Paper!";
        }else {
            return "Tie! Paper and Paper!";
        }
    }else{ //if player selects scissors
        if(cSelection === "rock") {
            cScore++;
            return "You Lose! Rock beats Scissors!";
        }else if(cSelection === "paper") {
            pScore++;
            return "You Win! Scissors beats Paper!";
        }else {
            return "Tie! Scissors and Scissors!";
        }
    }
}

function game(event) {
    
        let pSelection = event.target.value;
        let cSelection= computerPlay();

        document.getElementById("player-choice").src = `img/${pSelection}.jpg`;
        document.getElementById("computer-choice").src = `img/${cSelection}.jpg`;
        

        roundText.innerText = playRound(pSelection, cSelection);
        pScoreBoard.innerText = pScore;
        cScoreBoard.innerText = cScore;

        if(pScore === 5) {
            roundText.textContent = "You are the winner!";
            resetGame();

        }else if(cScore === 5) {
            roundText.textContent = "Computer Wins! You lose...";
            resetGame();
        }   
}

function resetGame() {
    if(confirm("Play again?")){
        //reset 'hands'
        document.getElementById("player-choice").src = `img/question.png`;
        document.getElementById("computer-choice").src = `img/question.png`;
        //reset score
        pScore = 0;
        cScore = 0;
        pScoreBoard.innerText = pScore;
        cScoreBoard.innerText = cScore;
        //reset score description
        roundText.innerText = "Pick a hand!"
        
    }else {
        for(let button of buttons){
            button.removeEventListener("click", game);
        }
        return;
    }
}


//refactor javascript
//refactor CSS
//polish up UI/html