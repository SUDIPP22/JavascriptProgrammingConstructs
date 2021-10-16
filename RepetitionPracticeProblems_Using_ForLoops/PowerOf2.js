/**
 * Write a program that takes a command-line argument n and prints a table of the 
 * powers of 2 that are less than or equal to 2^n.
 * @author Sudip Panja
 */

const prompt = require('prompt-sync')({sigint : true});

const number = prompt("Enter a range to get power of 2 : ");

for(i = 0; i <= number; i++){
    console.log(Math.pow(2,i));
}