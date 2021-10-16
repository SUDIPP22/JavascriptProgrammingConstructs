/**
 * Creating a program which is taking date and month from the command line and
 * prints true if date of month is between March 20 and June 20, false otherwise
 * @author Sudip Panja
 */
const prompt = require("prompt-sync")({sigint: true});

const date = prompt("Enter a date : ");
const month = prompt("Enter a month : ");

if((month == 3 && date >= 20 && date < 31 ) || (month == 4 && date>= 1 && date < 30)
|| (month == 5 && date >= 1 && date < 31) || (month == 6 && date <= 20)) {
    console.log("True");
} else {
    console.log("False");
}