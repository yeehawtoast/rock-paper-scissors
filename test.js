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
function game()