/**
 * To check whether the entered year is leap year or not
 * @author Sudip Panja
 */

const prompt = require("prompt-sync")({sigint: true});

const year = prompt("Enter a year (yyyy) : ");
if(year.length == 4) {
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0) ) {
        console.log(year+ " is a Leap-Year.");
    } else {
        console.log(year+ " is not a Leap-Year.");
    }
} else {
    console.log("Please enter a valid year!!!");
}