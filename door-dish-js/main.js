
/*alert(`It's working so far!`)

// Part 1
let takeout 
let delivery

alert(`Hello Customer!`)
let takeoutOrDelivery = prompt (`Is your order takeout or delivery?`)
alert (`You're order will be ${takeoutOrDelivery}`)
console.log(`You're order will be ${takeoutOrDelivery}?`) 
let numbOfPizza = prompt(`How many pizzas do you want?`)
alert (`You have ordered ${numbOfPizza} pizzas.`)
console.log(`You have ordered ${numbOfPizza}`)
let extraCheese = prompt(`Would you like extra chesse or no extra cheese on your pizza?`)
alert (`You have added ${extraCheese} to your pizzas.`)
console.log(`You have added ${extraCheese} to your pizzas.`)
alert(`We are preparing your ${numbOfPizza} with ${extraCheese} and mode of delivery will be ${takeoutOrDelivery}`)
console.log(`We are preparing your ${numbOfPizza} pizzas with ${extraCheese} and mode of delivery will be ${takeoutOrDelivery}`)*/


// Part 2



/*
const pizza = 15.0
const extraCheese = 2.0
const deliveryFee = 3.0
let driverTip = 0.0
*/





/*alert(`Hello Customer! Welcome to Pizza World.`); // Greet customer
//let takeoutOrDelivery = prompt (`Is your order takeout or delivery?`) // Ask customer what type of delivery, store that response in a variable named takeoutDelivery.
//alert (`You're order will be ${takeoutOrDelivery}`) // Make an alert to send a message about the type of order. 
//console.log(`You're order will be ${takeoutOrDelivery}?`) // Log the response (take out or delivery) and print it to the console log. 

let deliveryMethod = prompt ("Would you like your order delivered: yes or no ?");

if (deliveryMethod === "yes"){
    let  driverTip = prompt(`Delivery requires a tip. How much would you like to tip ?`);
    alert(`Your order will be delivered and the tip amount will be $${driverTip}`)
    console.log(`Your order will be delivered and the tip amount will be $${driverTip}`);
   
}else if (deliveryMethod === "no")
alert("Please pick up your order")
    console.log("Please pick up your order.")


//driverTip = prompt(`Delivery requires a tip. How much would you like to tip ?`) //Create a prompt to ask for a tip, If and only if the order is a delivery. ***figure out how to create a condition to do this. 
//alert (`You have tipped the driver $${driverTip}`) // Make an alert to display the amount tipped to driver.
//console.log(`You have tipped the driver $${driverTip}`) // send a message to console displaying the tip to driver. 

let numbOfPizza = prompt(`How many pizzas do you want?`) //Ask how many pizzas and store the amount in a variable named numbPizza. 
alert (`You have ordered ${numbOfPizza} pizzas.`) // Make an alert to display the number of pizzas ordered. 
console.log(`You have ordered ${numbOfPizza}`) // Log number of pizzas in the console. 

let moreCheese = prompt(`Would you like extra chesse on your pizza: yes or no?`) // Ask customer if they want extra cheese. Save the answer in variable named moreChesse. This should be a yes or no question.
if (moreCheese === "yes"){
    alert(`Extra cheese costs $${extraCheese} per pizza.`)
    console.log(`Extra cheese costs $${extraCheese}`)
alert (`You have added extra cheese to each of your $${numbOfPizza} pizzas.`) // Make an alert to display if the customer selected extra cheese or not. 

console.log(`You have added extraCheese to your pizzas.It will cost and extra $ ${extraCheese}`) // Log if they chose extra chesse or not. 

let totalOfXtraCheese = (`${numbOfPizza * extraCheese}`)

alert (`The total cost of extra chese will be $${totalOfXtraCheese}`)

alert(`We are preparing your ${numbOfPizza} pizzas with extra cheese and mode of delivery will be ${deliveryMethod}`) // Make an alert letting the customer know the entire order is being prepared. 

console.log(`We are preparing your ${numbOfPizza} pizzas with extra cheese and mode of delivery will be ${deliveryMethod}.`) //Log the message sent to customer that the order has been placed. 
}

else if (moreCheese === "no"){
    alert(`We are preparing your ${numbOfPizza} pizzas. Please pick up your order.`) 

    console.log(`We are preparing your ${numbOfPizza} pizzas. Please pick up your order.`)
}


   

/* alert(driverTip)
    console.log(`No driver tip required`)

}else{
    (`No driver tip required.`)

} */
    







// Part 3

/*

const pizza = 15.0
const extraCheese = 2.0
const deliveryFee = 3.0
let driverTip = 0.0





alert(`Hello Customer! Welcome to Pizza World.`); // Greet customer
//let takeoutOrDelivery = prompt (`Is your order takeout or delivery?`) // Ask customer what type of delivery, store that response in a variable named takeoutDelivery.
//alert (`You're order will be ${takeoutOrDelivery}`) // Make an alert to send a message about the type of order. 
//console.log(`You're order will be ${takeoutOrDelivery}?`) // Log the response (take out or delivery) and print it to the console log. 

let deliveryMethod = prompt ("Would you like your order delivered: yes or no ?");

if (deliveryMethod === "yes"){
    let  driverTip = prompt(`Delivery requires a tip. How much would you like to tip ?`);
    alert(`Your order will be delivered and the tip amount will be $${driverTip}`)
    console.log(`Your order will be delivered and the tip amount will be $${driverTip}`);
   
}else if (deliveryMethod === "no")
alert("Please pick up your order")
    console.log("Please pick up your order.")


//driverTip = prompt(`Delivery requires a tip. How much would you like to tip ?`) //Create a prompt to ask for a tip, If and only if the order is a delivery. ***figure out how to create a condition to do this. 
//alert (`You have tipped the driver $${driverTip}`) // Make an alert to display the amount tipped to driver.
//console.log(`You have tipped the driver $${driverTip}`) // send a message to console displaying the tip to driver. 

let numbOfPizza = prompt(`How many pizzas do you want?`) //Ask how many pizzas and store the amount in a variable named numbPizza. 
alert (`You have ordered ${numbOfPizza} pizzas.`) // Make an alert to display the number of pizzas ordered. 
console.log(`You have ordered ${numbOfPizza}`) // Log number of pizzas in the console. 

let moreCheese = prompt(`Would you like extra chesse on your pizza: yes or no?`) // Ask customer if they want extra cheese. Save the answer in variable named moreChesse. This should be a yes or no question.
if (moreCheese === "yes"){
    alert(`Extra cheese costs $${extraCheese} per pizza.`)
    console.log(`Extra cheese costs $${extraCheese}`)
alert (`You have added extra cheese to each of your $${numbOfPizza} pizzas.`) // Make an alert to display if the customer selected extra cheese or not. 

console.log(`You have added extraCheese to your pizzas.It will cost and extra $ ${extraCheese}`) // Log if they chose extra chesse or not. 

let totalOfXtraCheese = (`${numbOfPizza * extraCheese}`)

alert (`The total cost of extra chese will be $${totalOfXtraCheese}`)

alert(`We are preparing your ${numbOfPizza} pizzas with extra cheese and mode of delivery will be ${deliveryMethod}`) // Make an alert letting the customer know the entire order is being prepared. 

console.log(`We are preparing your ${numbOfPizza} pizzas with extra cheese and mode of delivery will be ${deliveryMethod}.`) //Log the message sent to customer that the order has been placed. 
}

else if (moreCheese === "no"){
    alert(`We are preparing your ${numbOfPizza} pizzas. Please pick up your order.`) 

    console.log(`We are preparing your ${numbOfPizza} pizzas. Please pick up your order.`)
}
*/



// Part 4

const pizza = 15.0
const extraCheese = 2.0
const deliveryFee = 3.0
let driverTip = 0.0





alert(`Hello Customer! Welcome to Pizza World.`); // Greet customer
//let takeoutOrDelivery = prompt (`Is your order takeout or delivery?`) // Ask customer what type of delivery, store that response in a variable named takeoutDelivery.
//alert (`You're order will be ${takeoutOrDelivery}`) // Make an alert to send a message about the type of order. 
//console.log(`You're order will be ${takeoutOrDelivery}?`) // Log the response (take out or delivery) and print it to the console log. 

let deliveryMethod = prompt ("Would you like your order delivered: yes or no ?");

if (deliveryMethod === "yes"){
    let  driverTip = prompt(`Delivery requires a tip. How much would you like to tip ?`);
    alert(`Your order will be delivered and the tip amount will be $${driverTip}`)
    console.log(`Your order will be delivered and the tip amount will be $${driverTip}`);
   
}else if (deliveryMethod === "no")
alert("Please pick up your order")
    console.log("Please pick up your order.")


//driverTip = prompt(`Delivery requires a tip. How much would you like to tip ?`) //Create a prompt to ask for a tip, If and only if the order is a delivery. ***figure out how to create a condition to do this. 
//alert (`You have tipped the driver $${driverTip}`) // Make an alert to display the amount tipped to driver.
//console.log(`You have tipped the driver $${driverTip}`) // send a message to console displaying the tip to driver. 

let numbOfPizza = prompt(`How many pizzas do you want?`) //Ask how many pizzas and store the amount in a variable named numbPizza. 
alert (`You have ordered ${numbOfPizza} pizzas.`) // Make an alert to display the number of pizzas ordered. 
console.log(`You have ordered ${numbOfPizza}`) // Log number of pizzas in the console. 

let moreCheese = prompt(`Would you like extra chesse on your pizza: yes or no?`) // Ask customer if they want extra cheese. Save the answer in variable named moreChesse. This should be a yes or no question.

if (moreCheese === "yes"){
    alert(`Extra cheese costs $${extraCheese} per pizza.`)
    console.log(`Extra cheese costs $${extraCheese}`)
alert (`You have added extra cheese to each of your $${numbOfPizza} pizzas.`) // Make an alert to display if the customer selected extra cheese or not. 

console.log(`You have added extraCheese to your pizzas.It will cost and extra $ ${extraCheese}`) // Log if they chose extra chesse or not. 

let totalOfXtraCheese = (`${numbOfPizza * extraCheese}`)

alert (`The total cost of extra cheese will be $${totalOfXtraCheese}`)

alert(`We are preparing your ${numbOfPizza} pizzas with extra cheese and the order will be delivered. The total amount will be ${totalOfXtraCheese * numbOfPizza + deliveryFee + driverTip}`) //Make an alert letting the customer know the entire order is being prepared. 

console.log(`We are preparing your ${numbOfPizza} pizzas with extra cheese and your pizza will be delivered. The delivery charge will be $${deliveryFee}`) //Log the message sent to customer that the order has been placed. 
}

else if (moreCheese === "no"){
    alert(`We are preparing your ${numbOfPizza} pizzas. Please pick up your order.`) 

    console.log(`We are preparing your ${numbOfPizza} pizzas. Please pick up your order.`)

    alert(`We are preparing your ${numbOfPizza} pizzas with no cheese and will not be delivered. Your total will be $${numbOfPizza * pizza}`)
    console.log(`We are preparing your $${numbOfPizza} pizzas with no cheese and will not be delivered. Your total will be ${numbOfPizza * pizza}`)
}



