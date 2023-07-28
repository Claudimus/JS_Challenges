// your code, here
//Let's get to the grocery store before there's nothing left!

//Write some JavaScript code to calculate the cost of purchasing the following and output the total to the JavaScript Console. We'll want to declare our variables and store the numerical prices for each item. Declare a `totalCost` variable that stores the total cost of all your items then `console.log` the results.

//- A loaf of bread: \$1.99
//- A gallon of milk: \$3.89
//- One dozen eggs: \$2.29

//Expected output:

//```no-highlight
//=> Your total cost is: $8.17
//```

//console.log(`Your total cost is: $${totalCost}`)//

const bread = 1.99
const milk = 3.89
const eggs = 2.29
const totalCost = `$${3*bread+3*milk+3*eggs}`
console.log (`Your total cost is: ${totalCost}`)