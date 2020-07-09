// https://www.codewars.com/kata/5a092d9e46d843b9db000064
// Level 7kyu

/** Directions **/

//In this Kata, you will be given an array of integers whose elements have both a negative and a positive value,
// except for one integer that is either only negative or only positive. Your task will be to find that integer.
//
// Examples:
//
// [1, -1, 2, -2, 3] => 3
//
// 3 has no matching negative appearance
//
// [-3, 1, 2, 3, -1, -4, -2] => -4
//
// -4 has no matching positive appearance
//
// [1, -1, 2, -2, 3, 3] => 3
//
// (the only-positive or only-negative integer may appear more than once)

/** Function **/

function solve(arr){
    // sort the arr
    arr = arr.sort((a,b) => b - a);
    console.log(arr.sort((a, b) => b - a));
    // two pointers to compare the beginning and end of the array
    let pointer1 = 0;
    let pointer2 = arr.length - 1;
    // compare the first and last numbers. If the absolute value matches, move the pointers,
    while (pointer1 < pointer2) {
        if (arr[pointer1] * -1 === arr[pointer2]) {
            console.log(arr[pointer1], arr[pointer2]);
            pointer1 += 1;
            pointer2 -= 1;
        } else {
            // if the numbers match, return one of them
            console.log(arr[pointer1], arr[pointer2]);
            if (arr[pointer1] === arr[pointer2]) {
                return arr[pointer1];
            }
            break;
        }
    }
    //otherwise return the value that is the higher absolute value
    if (arr[pointer1] * -1 !== arr[pointer2]) {
        if (arr[pointer1] > Math.abs(arr[pointer2])) {
            console.log('the positive number is the answer');
            return arr[pointer1];
        } else {
            console.log('The answer is the negative number');
            return arr[pointer2];
        }
    }
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// solve([1,-1,2,-2,3]); // => 3
// solve([-3,1,2,3,-1,-4,-2]); // => 4
solve([1,-1,2,-2,3,3]); // => 3
// solve([-110,110,-38,-38,-62,62,-38,-38,-38]); // => -38
// solve([ -9,-105,-9,-9,-9,-9,105]); // => -9
