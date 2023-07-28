


//randome number called dice1 
let dice1 = Math.floor(Math.random()*6-1)+1
//random number named dice2 
let dice2 = Math.floor(Math.random()*6-1)+1
//add dice roll 1 and 2 and store them in diceRollTotal
let diceRollTotal = (`${dice1 + dice2}`)


//print the 2 rolls to the browser
alert(`You rolled a ${dice1} and ${dice2}`)
//print the 2 rolls to the console 
console.log(`You rolled a ${dice1} and ${dice2}`)
//print total to the browser 
alert(`The combined dice roll is ${diceRollTotal}`)
//print total dice roll to console 
console.log(` The combined dice roll is ${diceRollTotal}`) 




//Roll Again ********************************************** 
reroll=prompt(`Would you like to play again ?`)
let reroll = `Y`
while(reroll === `Y` ) {

   let dice1 = Math.floor(Math.random()*6-1)+1 ;
   let dice2 = Math.floor(Math.random()*6-1)+1 ;
   let  diceRollTotal = `${dice1 + dice2}`
alert(`You rolled a ${dice1} and a ${dice2}`);
console.log(`You rolled a ${dice1} and a ${dice2}`)
alert (`The total roll is ${diceRollTotal}`)
console.log(`The total roll is ${diceRollTotal}`)
}
