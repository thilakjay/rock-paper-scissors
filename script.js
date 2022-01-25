function computerPlay() {

    let randomNumber = Math.floor(Math.random()*3+1);
    let result = "";

    if(randomNumber === 1) result = "rock";
    else if(randomNumber === 2) result = "paper";
    else result = "scissors";

    return result;
}

function playRound(playerSelection, computerSelection) {

    //REFACTOR: some of these conditionals can be merged with || operator
    if(playerSelection === "rock"){
        if(computerSelection === "paper") {
            losses++;
            return "You Lose! Paper beats Rock!";
        }else if(computerSelection === "scissors") {
            wins++;
            return "You Win! Rock beats Scissors!";
        }else {
            ties++;
            return "Tie! Rock and Rock!";
        }
    }else if(playerSelection === "paper"){
        if(computerSelection === "rock") {
            wins++;
            return "You Win! Paper beats Rock!";
        }else if(computerSelection === "scissors") {
            losses++;
            return "You Lose! Scissors beats Paper!";
        }else {
            ties++;
            return "Tie! Paper and Paper!";
        }
    }else{ //if player selects scissors
        if(computerSelection === "rock") {
            losses++;
            return "You Lose! Rock beats Scissors!";
        }else if(computerSelection === "paper") {
            wins++;
            return "You Win! Scissors beats Paper!";
        }else {
            ties++;
            return "Tie! Scissors and Scissors!";
        }
    }
}

function game(event) {
    
        let playerSelection = event.target.value;
        let computerSelection= computerPlay();
        //selections made, time to assign respective images to selection
        //make a function for this?
        showSelections(playerSelection, computerSelection);

        let divResult = document.createElement("div");
        divResult.textContent = playRound(playerSelection, computerSelection);
        document.body.appendChild(divResult);

        if(wins === 5) {
            divResult.textContent = "You are the official winner!";
            document.body.appendChild(divResult);
            for(let button of buttons){
                button.removeEventListener("click", game);
            }

        }else if(losses === 5) {
            divResult.textContent = "Computer Wins! You lose...";
            document.body.appendChild(divResult);
            for(let button of buttons){
                button.removeEventListener("click", game);
            }
        }

        outputResults();
           
       
 function showSelections(pChoice, cChoice) {
     document.getElementById("user-choice").src = `img/${pChoice}.jpg`;
     document.getElementById("cpu-choice").src = `img/${cChoice}.jpg`;
 }  
    

    
}

function outputResults() {

}

let wins = 0;
let losses = 0;
let ties = 0;
let finalScoreMessage = "";

let playerWins = 0;
let computerWins = 0;

let buttons = document.querySelectorAll("input[type='image']");

for(let button of buttons){
    button.addEventListener("click", game);
}

//add div below 'fight' section - describe selection and winner.
//score scounter for cpu and player
//Update Title (add effects)
//Update font
//animate the buttons (grows on hover)
//refactor code, including CSS