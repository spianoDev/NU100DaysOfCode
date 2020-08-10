// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// Level 6kyu

/** Directions **/

// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

/** Function **/

function findOdd(A) {
    //loop through A and set up a frequency counter, setting unique numbers as keys
    let frequency = {};
    for (let num of A) {
        frequency[num] = frequency[num] + 1 || 1;
    }
    console.log(frequency);
    // now loop through the values of frequency and return the odd one
    for (let value of Object.values(frequency)) {
        if (value % 2 !== 0 ) {
            const findKey = (obj, val) => Object.keys(frequency).find(key => obj[key] === val);
            return parseInt(findKey(frequency, value));
        }
    }
}

/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/
// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // => 5
// findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]); // => -1
// findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]); // => 5
// findOdd([10]); // => 10
findOdd([1,1,1,1,1,1,10,1,1,1,1]); // => 10
// findOdd([5,4,3,2,1,5,4,3,2,10,10]); // =>  1
