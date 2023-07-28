/*

This JavaScript code is a program that counts from 1 to 100, and prints out all the odd numbers between 1 and 100.

Here's how it works:

We start by setting a variable i to 1: let i = 1.

Then we start a "do-while" loop. This is a way to repeat a set of instructions until a condition is met. 

In this case, we want to repeat the loop as long as i is less than or equal to 100: do { ... } while (i<=100).

Inside the loop, we check whether i is an odd number. We do this by checking whether i divided by 2 has a remainder (the % symbol means "remainder"): if (i%2 !== 0) { ... }.

If i is odd, we print it out to the console using console.log(i).
Finally, we increment the value of i by 1 so that we move on to the next number: i++.

So, as the program runs, it will print out all the odd numbers between 1 and 100 (1, 3, 5, 7, 9, and so on). I hope this helps! */









let i = 1
    do {
     if (i%2 !== 0) {
       console.log(i)
       } 
     i++
    } while (i<=100) 

    
    