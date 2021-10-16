/**
 * Extend the program to take a range of number as input and output the Prime Numbers in that range.
 * 
 * @author Sudip Panja
 */

 const prompt = require('prompt-sync')({sigint : true});

 const lowerNumber = prompt('Enter lower number: ')
 const higherNumber = prompt('Enter higher number: ')
 
console.log("Prime numbers between entered range are: ")
 
 // looping from lowerNumber to higherNumber
 for (let i = lowerNumber; i <= higherNumber; i++) {
     let flag = 0;
 
     // looping through 2 to user input number
     for (let j = 2; j < i; j++) {
         if (i % j == 0) {
             flag = 1;
             break;
         }
     }
 
     // if number greater than 1 and not divisible by other numbers
     if (i > 1 && flag == 0) {
         console.log(i);
     }
 }