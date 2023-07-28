//Your code here

//calculate the average score for each team and for both teams together (done)
//round the averages to the nearest integer for display(done)
//calculate the number of explorers passing the quiz (grade >= 70%)

//To get started, declare a variable for each person //
//assign their score as its value. 
//Then, do your calculations with those variables. 
//Finally, output the results to the console in a readable format.

//****************************************************************

//Team #1 JustJavaScript
const Rami = 88
const Natoya = 92
const Max = 68
const Lynn = 100
//make a variable for Team1 using an array (done)
const JustJavaScriptTeam1 = [Rami + Natoya + Max + Lynn]
//calculate average of Team1 (done)
const JustJavaScriptAverage = Math.floor((JustJavaScriptTeam1)/4)
//print results to browser using prompt 
prompt(`The average score for JustJavaScript Team 1 is ${JustJavaScriptAverage}.`)
//console log results 
console.log(`The average score for JustJavaScript is ${JustJavaScriptAverage}.`)

//*****************************************************************

//Team #2 - WeAreRuby
// assign const variables to names and give values to each name using test scores 
const Sasha = 82
const Mohammed = 98 
const Jennifer = 94
const Denise = 92
// Make a Team 2 variable adding all of the scores using an array 
const WeAreRubyTeam2 = [Sasha + Mohammed + Jennifer + Denise]
//average all of the scores together 
const WeAreRubyaverage = Math.floor((WeAreRubyTeam2)/4)
//print average to the browser using prompt 
prompt(`The average score for WeAreRuby Team 2 is ${WeAreRubyaverage}`)
//print average to console log 
console.log(`This is the average for We Are Ruby Team 2 is ${WeAreRubyaverage}.`)


// calculate the number of explorers passing the quiz (grade >=70%)

//average all explorers 
const totalAverage = Math.floor((Rami + Natoya + Max + Lynn + Sasha + Mohammed + Jennifer + Denise)/8)
//print total average 
prompt (`This is the average of all explorers ${totalAverage}`)
//print total average to console 
console.log(`This is the combined average of both teams: ${totalAverage}.`)

//Calculate explorers passing the quiz

let i=0
const students = [Rami,Natoya,Max,Lynn,Sasha,Mohammed,Jennifer,Denise]
let passingScore = 70
let studentsPassing = 0 
while (i < students.length){
  if (students[i] >= 70) {
    studentsPassing++
  }prompt (`${studentsPassing}students have passed the test`)
  console.log(`${studentsPassing} students have passed the test.`)
  i++
}



