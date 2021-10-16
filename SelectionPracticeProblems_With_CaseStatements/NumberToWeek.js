/**
 * Read a Number and Display the week day (Sunday, Monday,...)
 * @author Sudip Panja
 */
const prompt = require('prompt-sync')({sigint : true});
const number = prompt("Enter a number between 1 to 7 to display the week day : ");

switch (Number(number)) {
    case 1:
        console.log("Sunday");    
        break;
    case 2:
        console.log("Monday");    
        break;
    case 3:
        console.log("Tuesday");    
        break;
    case 4:
        console.log("Wednesday");    
        break;
    case 5:
        console.log("Thursday");    
        break;
    case 6:
        console.log("Friday");    
        break;
    case 7:
        console.log("Saturday");    
        break;
    default:
        console.log("Invalid input!!! There are only 7 days in a week");
        break;    
}