// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
// Level 8kyu

/** Directions **/

// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
// I'll appreciate for your help.
//
// P.S. Each array includes only integer numbers. Output is a number too.

/** Function **/

function arrayPlusArray(arr1, arr2) {
    // First I need a sum variable
    let sum = 0;
    // Then I need to loop through the values of each array adding them to the sum
    for (let num of arr1) {
        sum += num;
    }
    for (let num of arr2) {
        sum += num;
    }
    // Finally, return the sum
    console.log(sum);
    return sum;
}

/** Advanced Solution (Refactored) **/

function arrayPlusArray(arr1, arr2) {
    const nums = arr1.concat(arr2);
    const add = (a, b) => a + b;
    return nums.reduce(add);
}

/** Test Cases **/

// arrayPlusArray([1, 2, 3], [4, 5, 6]); // => 21
arrayPlusArray([-1, -2, -3], [-4, -5, -6]); // => -21
// arrayPlusArray([0, 0, 0], [4, 5, 6]); // => 15
// arrayPlusArray([100, 200, 300], [400, 500, 600]); // => 2100



