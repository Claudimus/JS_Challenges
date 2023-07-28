
//Part 1  ****************************
//Welcome to Rock, Paper, Scissors! should appear in the console. (Done)


alert(`Welcome to Rock, Paper, Scissors!`);
console.log(`Welcome to Rock, Paper, Scissors!`);

//Part 2 *********************************
//[Prompt] Choose rock (r), paper (p), or scissors (s): s (Done)

let playerChoiceRPS = prompt (`Choose rock (r), paper (p), or scissors (s): s`);

alert(`You chose ${playerChoiceRPS}`);
console.log(`You chose ${playerChoiceRPS}`);

// INVALID INPUT
while (playerChoiceRPS !== "r" && playerChoiceRPS !== "p" && playerChoiceRPS !== "s")
 {
  alert("Invalid input, please enter only r, p, or s");
  playerChoiceRPS = prompt("Choose rock (r), paper (p), or scissors (s):");
} 

//Part 3 ***********************************
//The computer opponent randomly chooses between rock, paper, and scissors. Output player and computer player choices. (Done)

let shapes = [`r`,`p`, `s`]; 
let computerChoiceRPS = shapes [Math.floor(Math.random()*shapes.length)];
alert(`The computer has chose ${computerChoiceRPS}`);
console.log(`The computer has chose ${computerChoiceRPS}`)

//Part 4 *************************************
//Output the result of the game before exiting.
//If the player enters an invalid option, print an error message.
//If both players choose the same option, it is a tie.

// TIE
if (playerChoiceRPS === computerChoiceRPS) {

alert (`It's a tie. Play again to break the tie !`);
console.log (`It's a tie. Play again to break the tie !`);

// I WIN
} else if (playerChoiceRPS === `r` && computerChoiceRPS === `s` || 
playerChoiceRPS === `p` && computerChoiceRPS === `r` ||
playerChoiceRPS === `s` && computerChoiceRPS === `p`) 
{
alert(`You win!`);
console.log(`You win!`);

// COMPUTER WINS 
} else if (playerChoiceRPS === `r` && computerChoiceRPS === `p` || 
playerChoiceRPS === `p` && computerChoiceRPS === `s` || 
playerChoiceRPS === `s` && computerChoiceRPS === `r`) 
{
alert(`Computer wins!`);
console.log(`Computer wins!`);
}



/*
/Part 1  ****************************
//Welcome to Rock, Paper, Scissors! should appear in the console. (Done)

alert(`Welcome to Rock, Paper, Scissors!`);
console.log(`Welcome to Rock, Paper, Scissors!`);

//Part 2 *********************************
//[Prompt] Choose rock (r), paper (p), or scissors (s): s (Done)

let playerChoiceRPS = prompt (`Choose rock (r), paper (p), or scissors (s): s`);

while (playerChoiceRPS !== "r" && playerChoice !== "p" && playerChoice !== "s") 
{
  alert("Invalid input, please enter only r, p, or s");
  playerChoice = prompt("Choose rock (r), paper (p), or scissors (s):");
} 



if (computerChoice === playerChoice) {
  // tie logic
} else {
  if (playerChoice === 'r') {
    if (computerChoice === 'p') {
      // lose logic
    } else if (computerChoice === 's') {
      // win logic
    }
  } else if (playerChoice === 'p') {
    if (computerChoice === 's') {
      // lose logic
    } else if (computerChoice === 'r') {
      // win logic
    }
  } else if (playerChoice === 's') {
    if (computerChoice === 'r') {
      // lose logic
    } else if (computerChoice === 'p') {
      // win logic
    }
  }

  */