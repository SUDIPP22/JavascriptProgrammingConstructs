/**
 * Using Random Function To Generate Two Digit Numbers and
 * Find Their Sum & Average
 * @author Sudip Panja
 */

const MAX_COUNT = 5;
let sum = 0;
let avg = 0;
let i = 0;
const num = [];

while(i < MAX_COUNT) {
    num[i] = (Math.floor(Math.random() * 90) + 10);
    sum += num[i];
    i++;
}

console.log("Numbers are : " +num);
console.log("Sum of those numbers are : " +sum);

avg = sum / MAX_COUNT;
console.log("Average of those numbers are : " +avg);