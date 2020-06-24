// https://www.codewars.com/kata/556196a6091a7e7f58000018/train/javascript
// Level 7kyu

/** Directions **/

//Given a sequence of numbers, find the largest pair sum in the sequence.
//
// For example
//
// [10, 14, 2, 23, 19] --> 42 (i.e. sum of 23 and 19)
// [99, 2, 2, 23, 19]  --> 122 (i.e. sum of 99 and 23)
// Input sequence contains minimum two elements and every element is an integer.

/** Function **/

function largestPairSum(numbers) {
    // variable to hold the sum
    let sum = 0;
    // sort the numbers from highest to lowest
    let numberSort = numbers.sort((a, b) => b - a);
    console.log(numberSort);
    // sum the first two values
    sum = numberSort[0] + numberSort[1];
    console.log(sum);
    // return the sum
    return sum;
}

/** Advanced Solution (Refactored) **/

function largestPairSum(numbers) {
    return numbers.sort(((a, b) => b - a)).slice(0, 2).reduce(function(num1,num2) { return num1 + num2 });
}

/** Test Cases **/

largestPairSum([10, 14, 2, 23, 19]); // => 42
largestPairSum([-10, -8, -16, -18, -19]); // => -18
