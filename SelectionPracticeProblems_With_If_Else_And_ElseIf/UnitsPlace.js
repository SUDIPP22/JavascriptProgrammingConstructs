/**
 * To read a number 1, 10, 100, 1000 etc from user input and
 * display unit, ten, thousand, hundred...
 * @author Sudip Panja
 */

const prompt = require('prompt-sync')({sigint : true});
const number = prompt("Enter a number to know the place value in Indian System : ");

if(number == 1) {
    console.log("Units");
} else if (number == 10) {
    console.log("Tens");
} else if (number == 100) {
    console.log("Hundreds");
} else if (number == 1000) {
    console.log("Thousands");
} else if (number == 10000) {
    console.log("Ten Thousands");
} else if (number == 100000) {
    console.log("Lakhs");
} else if (number == 1000000) {
    console.log("Ten Lakhs");
} else if (number == 10000000) {
    console.log("Crores");
} else if (number == 100000000) {
    console.log("Ten Crores");
} else if (number == 1000000000) {
    console.log("Arab");
} else if (number == 10000000000) {
    console.log("Ten Arab");
} else console.log("Invalid input!!!");