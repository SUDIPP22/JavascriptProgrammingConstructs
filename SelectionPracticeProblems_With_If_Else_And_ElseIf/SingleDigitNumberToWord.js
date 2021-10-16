/**
 * To take a number input from user and convert it in words
 * @author Sudip Panja
 */

const prompt = require('prompt-sync')({sigint : true});

const digit = prompt("Enter a number between 0 to 9 : ");

if(digit == 0) {
    console.log("Zero");
} else if (digit == 1) {
    console.log("One");
} else if (digit == 2) {
    console.log("Two");
} else if (digit == 3) {
    console.log("Three");
} else if (digit == 4) {
    console.log("Four");
} else if (digit == 5) {
    console.log("Five"); 
} else if (digit == 6) {
    console.log("Six");
} else if (digit == 7) {
    console.log("Seven");
} else if (digit == 8) {
    console.log("Eight");
} else if (digit == 9) {
    console.log("Nine");
} else{
    console.log("Please enter a number between 0 to 9");
}