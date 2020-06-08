// https://www.codewars.com/kata/5583090cbe83f4fd8c000051
// Level 8kyu

/** Directions **/

//Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example:
// 348597 => [7,9,5,8,4,3]

/** Function **/

function digitize(n) {
    //need a variable to hold the new array
    let reverseNumber = [];
    // in order to manipulate the number, convert it into a string.
    let stringNum = n.toString();
    // starting from the end of the new string(number), add each value (as a number again) to the new array
    for (let i = stringNum.length - 1; i >= 0; i--) {
        reverseNumber.push(parseInt(stringNum[i]));
    }
    // return the array
    console.log(reverseNumber);
    return reverseNumber;
}

/** Advanced Solution (Refactored) **/

function digitize(n) {
    return n.toString().split("").reverse().map(x => { return parseInt(x) });
}

/** Test Cases **/

digitize(35231); // => [1,3,2,5,3]
