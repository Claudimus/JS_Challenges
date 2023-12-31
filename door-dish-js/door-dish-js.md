Write a program that will take an online pizza order!

## Getting Started

From your `challenges` folder in the terminal, type the following commands:

```no-highlight
et get door-dish-js
cd door-dish-js
code .
```

For Mac users

```no-highlight
open index.html
```

For PC users

```no-highlight
start index.html
```

Your work will go in `main.js`

In the browser, open up the JavaScript console. You can refresh the page in order to see your changes. All input will be received using `prompt` and all output should be `alerts`.

**After completing Part 1, copy and paste the code into the Part 2 section, and comment out your work in Part 1. This can help you stay organized and see how you've refactored your work as you go along.**

### Part 1

Write a program that takes in user input and outputs it in alerts.

Here is what your program should do:

- Greet the patron.
- Ask if their order is for takeout or delivery.
- Accept the user's answer and save it as a variable.
- Ask how many pizzas they would like.
- Accept the user's answer and save it as a variable.
- Ask if they would like extra cheese added as a topping.
- Output a sentence returning the number pizzas, if there's extra cheese, and if it's delivery or takeout.

> Using `toLowerCase()` can handle for different inputs Using `toFixed(2)` will help with formatting the cost

> Remember, there will be more than one way to successfully complete this exercise!

### Example Output:

```no-highlight
Hello hungry friend! Welcome to Doordish, where the pizza comes to you!
Is your order takeout or delivery?
> takeout
How many pizzas would you like?
> 2
Would you like extra cheese?
> no
We are preparing your 2 pizzas with no extra cheese to be picked up at our door!
```

### Part 2

We need to consider the fact that some folks will want delivery and need to tip. In your `main.js` file, paste this price list:

```javascript
const pizza = 15.0
const extraCheese = 2.0
const deliveryFee = 3.0
let driverTip = 0.0
```

Update your code to prompt the user how much of a tip they want to give the driver _only after they've selected delivery_ as their option. The user input should update the current value stored in `driverTip`.

> Recall the `const` variable values cannot change for the life of the program. `prompt` stores answers as strings, and you may need to change some to fixed floats.

### Example Output:

```no-highlight
Hello hungry friend! Welcome to Doordish, where the pizza comes to you!
Is your order takeout or delivery?
> delivery
How much do you want to tip the driver?
> 3
How many pizzas would you like?
> 2
Would you like extra cheese?
> no
We are preparing your 2 pizzas with no extra cheese to be delivered. Thanks for tipping $3.00!
```

### Part 3

We need to be sure we aren't giving away free cheese! Add in some code that updates the price based on whether or not they ordered extra cheese. **Extra cheese is charged PER PIZZA ordered.**

### Example Output:

```no-highlight
Hello hungry friend! Welcome to Doordish, where the pizza comes to you!
Is your order takeout or delivery?
> delivery
How much do you want to tip the driver?
> 3
How many pizzas would you like?
> 2
Would you like extra cheese?
> yes
That will cost you an additional $4.00.
We are preparing your 2 pizzas with extra cheese to be delivered. Thanks for tipping $3.00!
```

### Part 4

Finally, we need to print an itemized receipt that includes a summary of the order and the total order cost.

### Example Output:

```javascript
"We are preparing your 2 pizzas with extra cheese to be delivered. With a $5 tip and a delivery fee, your total comes to $42.00"
```

### Submitting Your Code

Once you have completed this exercise, use the `et submit` command to submit your code from this project's folder.
