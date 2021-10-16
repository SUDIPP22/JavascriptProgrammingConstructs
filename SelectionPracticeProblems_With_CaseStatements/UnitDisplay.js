/**
 * Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
 * @author Sudip Panja
 */

const prompt = require('prompt-sync')({sigint : true});

const number = prompt("Enter a number to know the place value in Indian System : ");

switch (Number(number)) {
    case 1:
        console.log("Units")
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundreds");
        break;
    case 1000:
        console.log("Thousands");
        break;
    case 10000:
        console.log("Ten Thousands");
        break;
    case 100000:
        console.log("Lakhs");
        break;
    case 1000000:
        console.log("Ten Lakhs");
        break;
    case 10000000:
        console.log("Crores");
        break;
    case 100000000:
        console.log("Ten Crores");
        break; 
    case 1000000000:
        console.log("Arab");
        break; 
    case 10000000000:
        console.log("Ten Arab");
        break;
    default:
        console.log("Wrong inputs!!!")
        break;
}