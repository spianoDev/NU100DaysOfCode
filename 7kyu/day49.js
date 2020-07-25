// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba
// Level 7kyu

/** Directions **/

//Debug function getSumOfDigits that takes positive integer to calculate sum of it's digits.
// Assume that argument is an integer.
//
// Example
// 123  => 6
// 223  => 7
// 1337 => 15

/** Function **/
// The original function that requires debugging:
// function getSumOfDigits(integer) {
//     var sum = null;
//     var digits =  Math.floor(integer).toString();
//     for(var ix = 1; ix < digits.length; ix = sum + 1) {
//         sum =+ digits[ix + 1]);
// }
// return sum;
// }
// my solution with pseudo code

function getSumOfDigits(integer) {
    // change the sum to 0. Also change var to let
    let sum = 0;
    let digits = Math.floor(integer).toString();
    // change the sum + 1 to ++ & start on the 0 index
    for (let ix = 0; ix < digits.length; ix++) {
        // reverse the + and = & loop through the ix without the +1. Also delete the extra )
        // also be sure to revert the strings back to numbers
        sum += parseInt(digits[ix]);
    }
    console.log(sum);
    return sum;
}


/** Advanced Solution (Refactored) **/

// alternate solution
function getSumOfDigits(integer) {
    return Math.floor(integer).toString().split("").reduce((total, num) => total + parseInt(num), 0);
}
/** Test Cases **/

getSumOfDigits(123); // => 6
