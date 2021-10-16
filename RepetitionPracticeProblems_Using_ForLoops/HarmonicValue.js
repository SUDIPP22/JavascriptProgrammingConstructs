/**
 * Write a program that takes a command-line argument n and prints the nth harmonic number. 
 * Harmonic Number is of the form
 * H(n) = 1/1 + 1/2 + 1/3 + 1/4 + .... + 1/n
 * @author Sudip Panja
 */

const prompt = require('prompt-sync')({sigint : true});

const number = prompt("Enter the value of n : ");
let sum = 0;

for(i = 1; i <= number; i++){
    sum += 1 / i;
}
console.log("Harmonic value for the entered value is : " +sum);