let playerCount = 0;
let computerCount = 0;
var winner = playRound.eval('Person Wins!');
var loser = playRound.eval('Computer Wins!');
var tie = playRound.eval("It's A Tie!");

function computerChoice(){
    var computerOptions = ['Rock', 'Paper', 'Scissors'];
    var computerPick = computerOptions[Math.floor(Math.random() * computerChoice.length)]
}

console.log(computerChoice());

function playerChoice(){
    var person = prompt("Please Enter Rock, Paper, or Scissors","Rock" );
} 

function playRound(playerChoice,computerChoice){
//The Code for a Tie
    if (playerChoice === computerChoice){
      return "It's A Tie!"
    }

//The Code for A Player Win   
if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
         return "Person Wins!"
       }
if (playerChoice == 'Paper' && computerChoice == 'Rock'){
    return "Person Wins!"
}
if (playerChoice == 'Scissors' && computerChoice =='Paper'){
    return "Person Wins!"
}

//The Code for a Computer Win
if (playerChoice == 'Rock' && computerChoice == 'Paper'){
    return "Computer Wins!"
}
if (playerChoice == 'Paper' && computerChoice == 'Scissors'){
    return "Computer Wins!"
}
if (playerChoice == 'Scissors' && computerChoice == 'Rock'){
    return "Computer Wins!"
}
  }

//New Game Functions
function game(){
do{
    playerChoice();
    computerChoice;
    playRound();
    if (winner == true || loser == false){
        window.alert("You Win!")
        playerCount++
    }
    else if (winner == false || loser == true){
        window.alert("You Lose")
        computerCount++
    }
    else{
        window.alert("You tied!")
    }
} while (playerCount < 5 || computerCount <5)

if (playerCount == 5){
    window.alert("GAME OVER! YOU WIN!")
}
else if (computerCount == 5)
    window.alert("GAME OVER! YOU LOSE!")
   
}