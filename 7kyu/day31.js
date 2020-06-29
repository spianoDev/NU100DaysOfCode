// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript
// Level 7kyu

/** Directions **/

//There is enough money available on ATM in nominal value 10, 20, 50, 100, 200 and 500 dollars.
//
// You are given money in nominal value of n with 1<=n<=1500.
//
// Try to find minimal number of notes that must be used to repay in dollars, or output -1 if it is impossible.

/** Function **/

function solve(n) {
    // if the number isn't divisible by 5, return -1
    if (n % 10 !== 0) {
        console.log('You cannot get this change from an ATM!');
        return -1;
    }
    // make variables for each of the dollar denominations
    let fiveHundreds = Math.floor(n / 500);
    let twoHundreds = Math.floor(n % 500 / 200);
    let oneHundreds = Math.floor(n % 500 % 200 / 100);
    let fifties = Math.floor(n % 500 % 200 % 100 / 50);
    let twenties = Math.floor(n % 500 % 200 % 100 % 50 / 20);
    let tens = Math.floor(n % 500 % 200 % 100 % 50 % 20 / 10);
    console.log(fiveHundreds, twoHundreds, oneHundreds, fifties, twenties, tens);
    // start with the highest number and work way down to determine number of bills
    let billCount = fiveHundreds + twoHundreds + oneHundreds + fifties + twenties + tens;
    console.log(billCount);
    // return count
    return billCount;
}

/** Advanced Solution (Refactored) **/

function solve(n) {
    return (n % 10 !== 0) ? -1 : Math.floor((n / 500) + Math.floor(n % 500 / 200) + Math.floor(n % 500 % 200 / 100) + Math.floor(n % 500 % 200 % 100 / 50) + Math.floor(n % 500 % 200 % 100 % 50 / 20) + Math.floor(n % 500 % 200 % 100 % 50 % 20 / 10));
}

/** Test Cases **/

solve(770); // => 4
solve(550); // => 2
solve(10); // => 1
solve(1250); // => 4
// solve(125); // => -1
// solve(666); // => -1
// solve(42); // => -1

