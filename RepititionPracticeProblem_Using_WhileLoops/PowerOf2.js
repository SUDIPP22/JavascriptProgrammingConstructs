/**
 * Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached.
 * 
 * @author Sudip Panja
 */

 const prompt = require('prompt-sync')({sigint : true});

 const number = prompt('Enter the value of n: ');
 
let i=0
 while ( i <= number ) {
     let powerOf2 = Math.pow(2, i);
     if (powerOf2 <= 256) {
         console.log(powerOf2);
         i++;
     }
     else {
         break;
     }
 }