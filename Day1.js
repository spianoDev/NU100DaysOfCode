// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
// Level 8kyu

/** Directions **/

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum
// (also as a string):
//
// sumStr("4", "5")    // should output "9"
// sumStr("34", "5")   // should output "39"
// If either input is an empty string, consider it as zero.

/** Function **/

function sumStr(a,b) {
    // first I need to convert the values into numbers, but I need a condition for empty string
    if (a === '') {
        a = 0;
    } else {
        a = parseInt(a);
    }
    if (b === '') {
        b = 0;
    } else {
        b = parseInt(b);
    }
    // next I will add them together
    let sum = a + b;
    // finally I need to convert the values back into a string and return it
    console.log(sum.toString());
    return sum.toString();
}

/** Advanced Solution (Refactored) **/

function sumStr(a,b) {
    if (a === '') {
        a = 0;
    }
    if (b === '') {
        b = 0;
    }
    return (parseInt(a) + parseInt(b)).toString();
}

/** Test Cases **/

// sumStr("4","5"); // => "9"
// sumStr("34","5"); // => "39"
console.log(sumStr("", "2")); // => "2"
console.log(sumStr('', '')); // => "0"


