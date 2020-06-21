// https://www.codewars.com/kata/57d814e4950d8489720008db
// Level 8kyu

/** Directions **/

//This kata is from check py.checkio.org
//
// You are given an array with positive numbers and a number N. You should find the N-th power of the element in the
// array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
//
// Let's look at a few examples:
//
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

/** Function **/

// function index(array, n){
//     //need an answer variable
//     let answer;
//     // find the index of n
//     let index = array[n];
//     console.log('The index is: ' + index);
//     // use that value to calculate the nth power
//     answer = index ** n;
//
//     // return that answer unless answer is NaN, then return -1
//     if (index === undefined) {
//         console.log('-1');
//         return -1;
//     }
//     console.log(answer);
//     return answer;
// }

/** Advanced Solution (Refactored) **/

function index(array, n){
    return (array[n] !== undefined) ? array[n] ** n : -1;
}

/** Test Cases **/

index([1, 2, 3, 4],2); // => 9
index([1, 3, 10, 100],3); // => 1000000
index([0, 1],0); // => 1
index([1, 2],3); // => -1
index([0], 0); // => 1
index([1,1,1,1,1,1,1,1,1,1], 9); // => 1
index([1,1,1,1,1,1,1,1,1,2], 9); // => 512
index([29,82,45,10], 3); // => 1000
index([6,31], 3); // => -1
index([75,68,35,61,9,36,89,0,30], 10); // => -1
