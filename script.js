function computerPlay() {
    //generate a random number between 1 and 3 and store in variable
    //if number is 1 = rock, 2 = scissors, 3=paper
    //return the result
    //test to ensure randomness

    let randomNumber = Math.floor(Math.random()*3+1);
    let result = "";

    if(randomNumber === 1) result = "rock";
    else if(randomNumber === 2) result = "paper";
    else result = "scissors";

    return result;
}

function playRound(playerSelection, computerSelection) {
//check if player's selection beats/loses against computer
//if rock, check if it beats against the others
//return a string declaring win or lose, and the overall result
//do the same as above, but with paper, and scissors. 
//verify that rules work
//make playerselection's string input is case INSENSITIVE.



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

function game() {
//Call one of the previous functions to play 5 rounds. Keep the score
//and output the results and the winner/loser.
// *******************
//Use a loop (or repeat the function) to play 5 rounds.
//Ask the user for his input at the beginning of each round, while setting computer selection

//output the result of each round 
//track the score - wins, losses, ties into separate variables. Maybe use a scoreTracker function?
//At the end of 5 rounds, output the score and whether user wins or loses.

    
    
   
   // playerSelection = prompt("Please choose: Rock, Paper, or Scissors:").toLowerCase();
   
   // console.log(playRound(playerSelection, computerSelection));

   let buttons = document.querySelectorAll("input[type='button']");
   for(let button of buttons){
       button.addEventListener("click", (event) => {
        let playerSelection = event.target.value.toLowerCase();
        let computerSelection= computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        outputResults();
           
       });
   }
    

    
}

function outputResults() {
    console.log(`You have ${wins} wins, ${losses} losses, and ${ties} ties.`);
    if(wins > losses && wins > ties){
        console.log("You WIN!");
    }else{
        console.log("You didn't rack up enough wins. You LOSE!");
    }
}

let wins = 0;
let losses = 0;
let ties = 0;
game();