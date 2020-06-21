// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// Level 8kyu

/** Directions **/

// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: if there is nothing to sum, the sum is default to 0.

/** Function **/

function positiveSum(arr) {
    // need a variable to hold the sum
    let sum = 0;
    // edge cases: if array is empty, sum = 0
    if (arr.length === 0) {
        return 0;
    }
    // loop through the array
    for (let num of arr) {
        // if the number is positive, add to the sum
        if (num > 0) {
            sum += num;
        } else {
            // if all numbers are negative, sum = 0
            sum += 0;
        }
    }
    // return sum
    console.log(sum);
    return sum;
}

/** Advanced Solution (Refactored) **/

function positiveSum(arr) {
    let positives = arr.filter(x => {return (x > 0)});
    let arrSum = arr => arr.reduce((a,b) => a + b, 0);
    return arrSum(positives);
}

/** Test Cases **/

positiveSum([1,2,3,4,5]); // => 15
positiveSum([1,-2,3,4,5]); // => 13
positiveSum([]); // => 0
positiveSum([-1,-2,-3,-4,-5]); // => 0
positiveSum([-1,2,3,4,-5]); // => 9
