/**
 * Take a number from user and check if the number is a Prime then show that its palindrome is also prime
    a. Write function check if number is Prime
    b. Write function to get the Palindrome.
    c. Check if the Palindrome number is also prime
 *
 * @author Sudip Panja
 */

    const prompt = require('prompt-sync')({sigint : true});

    function checkPrime(num) {
        let flag = 0;
        for ( i = 2; i <= num / 2; i++ ) {
            ans = num % i;
            if ( ans == 0 ) {
                flag = 1;
            }
        }
        if ( flag == 1 ) {
            console.log(num + " is not prime.")
        }
        else {
            console.log(num + " is prime.")
        }
    }
    
    function checkPalindrome(num) { 
        while ( num > 0 ) {
            rem = num % 10;
            rev = rev * 10 + rem;
            num = Math.floor(num / 10);
        }
        num = rev;
        console.log("Palindrome of the entered number is: " +num);
    }
    
    function perform(num)
    {
        checkPrime(num);
        checkPalindrome(num);
        checkPrime(rev);
    }
    
    let num = prompt('Enter the number: ');
    let rem = 0;
    let rev = 0;
    perform(num);