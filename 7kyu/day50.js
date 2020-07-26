// https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript
// Level 7kyu

/** Directions **/

//Your task is to write a function, which takes two arguments and returns a sequence.
// First argument is a sequence of values, second is multiplier.
// The function should filter all non-numeric values and multiply the rest by given multiplier.

/** Function **/

// function multiplyAndFilter(array, multiplier){
//     // variable to hold the answer
//     let answer = [];
//     // loop through the contents of array
//     for (let item of array) {
//         // if the value is a number, apply the multiplier and push to answer array
//         if (typeof item === 'number') {
//             answer.push(item * multiplier);
//         }
//     }
//     console.log(answer);
//     // return answer
//     return answer;
// }

/** Advanced Solution (Refactored) **/


function multiplyAndFilter(array, multiplier){
    return array.filter((number) => typeof number === 'number').map((item) => item * multiplier);
}

/** Test Cases **/

multiplyAndFilter([1,2,3,4], 1.5); // => [1.5, 3, 4.5, 6]
// multiplyAndFilter([1,2,3], 0); // => [0, 0, 0]
// multiplyAndFilter([0,0,0], 2); // => [0, 0, 0]
multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3); // => [3,7.5,30]
