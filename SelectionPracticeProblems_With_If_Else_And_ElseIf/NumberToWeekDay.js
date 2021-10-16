/**
 * To take a number input from user and display the week days.
 * @author Sudip Panja
 */

const prompt = require('prompt-sync')({sigint : true});
const number = prompt("Enter a number between 1 to 7 to display the week day : ");

if(number == 1) {
    console.log("It is Sunday...");
} else if (number == 2) {
    console.log("It is Monday...");
} else if (number == 3) {
    console.log("It is Tuesday...");
} else if (number == 4) {
    console.log("It is Wednesday...");
} else if (number == 5) {
    console.log("It is Thursday...");
} else if (number == 6) {
    console.log("It is Friday...");
} else if (number == 7) {
    console.log("It is Saturday...");
} else console.log("Invalid input!! There are only 7 days in a week");