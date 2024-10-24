"use server"
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
    console.log(`Round ${i} : Number ${sum}`)
}

console.log("The sum of the first 10 natural numbers is: " + sum);