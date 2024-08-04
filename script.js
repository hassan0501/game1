const choices = ['Rock','Paper','scissors'];
let result = '';
const computerChoice = document.getElementById('computerChoice');
const resultDisplay = document.getElementById("resultDisplay");
const playerChoice = document.getElementById('playerChoice');
let score = {
    wins:0,
    loses:0,
    ties:0
}
let scoreDisplay = document.getElementById('scoreDisplay');

function playGameRock(){
   
    const computerMove = choices[Math.floor(Math.random() * 3)];
    
        if(computerMove === 'Rock'){
            result = 'Tie';
            score.ties += 1;
        }
        else if(computerMove === 'Paper'){
            result = 'You Lose'
            score.loses += 1;
        }
        else{
            result = 'you win';
            score.wins += 1;
        }
        computerChoice.textContent = `computermove: ${computerMove}`;
        resultDisplay.textContent = `Result : ${result}`;
        playerChoice.textContent = `Your choice : Rock`;
       scoreDisplay.textContent = `Wins${score.wins}:Loses${score.loses}:Ties${score.ties}`;
}

function playGamePaper(){

    const computerMove = choices[Math.floor(Math.random() * 3)];
    
        if(computerMove === 'Rock'){
            result = 'You Win';
            score.wins += 1;
        }
        else if(computerMove === 'Paper'){
            result = 'Tie'
            score.ties += 1;
        }
        else{
            result = 'you lose';
            score.loses += 1;
        }
        computerChoice.textContent = `computermove: ${computerMove}`;
        resultDisplay.textContent = `Result : ${result}`;
        playerChoice.textContent = `Your choice : Paper`;
        scoreDisplay.textContent = `Wins${score.wins}:Loses${score.loses}:Ties${score.ties}`;
}

function playGameScissors(){

    const computerMove = choices[Math.floor(Math.random() * 3)];
    
        if(computerMove === 'Rock'){
            result = 'You Lose';
            score.loses += 1;
        }
        else if(computerMove === 'Paper'){
            result = 'You win'
            score.wins += 1;
        }
        else{
            result = 'Tie';
            score.ties += 1;
        }
        computerChoice.textContent = `computermove: ${computerMove}`;
        resultDisplay.textContent = `Result : ${result}`;
        playerChoice.textContent = `Your choice : Scissors`;
        scoreDisplay.textContent = `Wins${score.wins}:Loses${score.loses}:Ties${score.ties}`;
}