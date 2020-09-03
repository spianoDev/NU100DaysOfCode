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

// let maxSequence = function(arr){
//     let originalArr = arr;
//     let sortedArr = arr.slice().sort((a, b) => b - a);
//     if (arr.length === 0 || sortedArr[0] <= 0) { return 0; }
//     let sum = 0;
//     console.log(originalArr);
//     if (sortedArr[arr.length -1] >= 0) {
//         for (let num of arr) {
//             sum += num;
//         }
//         return sum;
//     } else {
//         let counter = 1;
//         let allSums = [];
//         let pointer = 0;
//         while (pointer < arr.length - counter) {
//             while (counter < arr.length) {
//                 let loopSum = 0;
//                 for (let i = 0; i < arr.length - counter; i++) {
//                     loopSum += originalArr[i];
//                     console.log('temporary sum ' + loopSum + ' and this is i ' + i);
//                     allSums.push(loopSum);
//                 }
//                 console.log('this is the counter ' + counter);
//                 counter++;
//             }
//             pointer++;
//         }
//         console.log(Math.max(...allSums));
//         return Math.max(...allSums);
//     }
// };

// The above solution was getting me close, but I decided to start over with the below answer
/** Advanced Solution (Refactored) **/

function maxSequence(arr) {
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
        let smallerSumLeft = 0;
        let smallerSumRight = 0;
        // The loop will now add everything except the first and last values
        let counter = arr.length - 2;
        while (smallerSumLeft <= sum || smallerSumRight <= sum) {
            let pointer1 = arr.length - 1;
            let pointer2 = 0;
            smallerSumLeft = arr[pointer1];
            pointer1 -= 1;
            console.log(smallerSumLeft);
            smallerSumRight = arr[pointer2];
            pointer2 += 1;
            console.log(smallerSumRight);
            if (smallerSumRight > sum) {
                sum = smallerSumRight;
            } else if (smallerSumLeft > sum) {
                sum = smallerSumLeft;
            }
            counter -= 1;
            // while (smallerSumLeft >= sum || smallerSumRight >= sum) {
            //     smallerSumLeft += arr[pointer1];
            //     smallerSumRight += arr[pointer2];
            //     counter -= 1;
            //     if (smallerSumRight < smallerSumLeft && smallerSumRight >= sum) {
            //         console.log('the right sum is ' + smallerSumRight);
            //     }else if (smallerSumLeft < smallerSumRight && smallerSumLeft >= sum) {
            //         console.log('the left sum is ' + smallerSumLeft);
            //     }
            }
        // }
        console.log('The answer is ' + sum);
        // return consecutiveNumbers;
    }
}

/** Test Cases **/

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]); // => 6
// maxSequence([ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ]); // => 155
