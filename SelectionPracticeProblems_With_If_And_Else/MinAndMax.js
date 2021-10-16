/**
 * Creating a program that reads 5 Random 3 Digit values and
 * then outputs the minimum and maximum value
 * @author Sudip Panja
 */

const MAX_COUNT = 5;
let count = 0;
const number = [];

//Generating 5 Random Numbers
while(count < MAX_COUNT) {
    number[count] = (Math.floor(Math.random() * 900) + 100);
    count++;
}
console.log("Random Numbers are : " +number);

let max = number[1];
let min = number[2];

//Getting the maximum and minimum numbers
for(i = 0; i < number.length; i++) {
    if(number[i] > max) {
        max = number[i];
    }

    if(number[i] < min) {
        min = number[i];
    }
}
console.log("Maximum number is : " +max);
console.log("Minimum number is : " +min);