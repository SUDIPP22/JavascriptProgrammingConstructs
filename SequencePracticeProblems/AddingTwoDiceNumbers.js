/**
 * Using Random Function To Get Two Dice Numbers and
 * Adding Those Numbers
 * @author Sudip Panja
 */

let dice1 = (Math.floor(Math.random() * 6) + 1);
let dice2 = (Math.floor(Math.random() * 6) + 1);
let sum = dice1 + dice2;
console.log("Dice number 1 is : " +dice1);
console.log("Dice number 2 is : " +dice2);
console.log("Sum of both the dice numbers are : " +sum);