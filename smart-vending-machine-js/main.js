// YOUR CODE GOES HERE

//1. console.log("Hello, I'm the first and only Talking Vending Machine."); -DONE
//2. Ask the user what vending machine item they would like. -DONE
//3. Accept the user answer and save it as a variable. -DONE
//4. Ask the user how many of the vending machine item they would like. -DONE
//5. Accept the user's answer (should be a number) and save it as a variable -DONE
//6. Use the answer to start a while loop, in which you print the word the user asked for, the number of times that they specified. (Done)

//Vending machine Pt.1 ******************************************************************
alert("Hello, I'm the first and only Talking Vending Machine.") //Greeting
let snack = prompt(`What vending machine item would you like?`) // Ask them what item they would like 
alert(`You ordered a ${snack}`) //print to brower what item they want 
console.log(`You ordered a ${snack}`) //This is what they ordered saved in the console. 
let numberSnacks = prompt(`How many ${snack} would you like?`) //Ask how many snacks. 
alert(`You have ordered ${numberSnacks} snacks`) //print to browser how many snacks they want. 
console.log(`You have ordered ${numberSnacks} snacks.`) //Log the number of snacks in the console. 

//While Loop ****************************************************************************

let i = 1

while ( i <= numberSnacks ) {
    console.log(`Here are your ${numberSnacks} of ${snack}.\nCome again !`)
    console.log(`${snack}`)
    i++
}
//Vending machine Pt.2 ******************************************************************
//Next, we want to add one more feature to our vending machine in which a user can ask for "tons" of something as an amount, and get a random amount of whatever they asked for. Modify your program so it achieves the following:

//Start by going through the same steps as above.
//When the user is asked how many things they would like, if they say "tons", print the vending machine item the user requested a random number of times less than 20.
let tons = (Math.floor(Math.random()*20-1)+1) 
if (numberSnacks === `tons` && numberSnacks.includes(`tons`))
while (i < tons){
   console.log (`Here is your ${snack}.`)
   i++
   }


/*Vending Machine Pt. 3 
**********************************************************************/

