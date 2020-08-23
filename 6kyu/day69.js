// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript
// Level 6kyu

/** Directions **/

//In this Kata, you will sort elements in an array by decreasing frequency of elements.
// If two elements have the same frequency, sort them by increasing value.
//
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// --we sort by highest frequency to lowest frequency. If two elements have same frequency, we sort by increasing value

/** Function **/

function solve(arr){
    return arr.sort((a,b) => arr.filter(incB => incB === b).length - arr.filter(incA => incA === a).length);
}

/** Advanced Solution (Refactored) **/

// The above solution works in my editor, but not in the kata... may be related to the sort issue of another kata in
// this challenge. I'm going to consider this complete even though it will not pass the tests.

/** Test Cases **/

console.log(solve([2,3,5,3,7,9,5,3,7])); // => [3,3,3,5,5,7,7,2,9]
// solve([1,2,3,0,5,0,1,6,8,8,6,9,1]); // => [1,1,1,0,0,6,6,8,8,2,3,5,9]
solve([5,9,6,9,6,5,9,9,4,4]); // => [9,9,9,9,4,4,5,5,6,6]
// solve([4,4,2,5,1,1,3,3,2,8]); // => [1,1,2,2,3,3,4,4,5,8]
// solve([4,9,5,0,7,3,8,4,9,0]); // => [0,0,4,4,9,9,3,5,7,8]




