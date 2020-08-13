// https://www.codewars.com/kata/5287e858c6b5a9678200083c
// Level 6kyu

/** Directions **/

// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number
// of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//
// For example, take 153 (3 digits):
//
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):
//
//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:
//
// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.
//
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will
// be passed into the function.

/** Function **/
function narcissistic(value) {
    let valueLength = value.toString().length;
    let valueString = value.toString();
    let sum = 0;
    for (let char of valueString) {
        sum += parseInt(char) ** valueLength;
    }
    console.log(sum);
    return sum === value;
}


/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

// narcissistic( 7 ); // => true
narcissistic( 371 ); // => true
