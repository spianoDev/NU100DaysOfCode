// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
// Level 5kyu

/** Directions **/

//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.
//
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

/** Function **/

let maxSequence = function(arr){
    let originalArr = arr;
    let sortedArr = arr.slice().sort((a, b) => b - a);
    if (arr.length === 0 || sortedArr[0] <= 0) { return 0; }
    let sum = 0;
    console.log(originalArr);
    if (sortedArr[arr.length -1] >= 0) {
        for (let num of arr) {
            sum += num;
        }
        return sum;
    } else {
        let counter = 1;
        let allSums = [];
        let pointer = 0;
        while (pointer < arr.length - counter) {
            let loopSum = 0;
            for (let i = 0; i < counter; i++) {
                loopSum += originalArr[pointer + i];
                console.log('temporary sum ' + loopSum);
                pointer++;
                allSums.push(loopSum);
            }
            counter++;
        }
        console.log(Math.max(...allSums));
        return Math.max(...allSums);
    }
};

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // => 6

