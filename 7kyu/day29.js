// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/train/javascript
// Level 7kyu

/** Directions **/

//Given a positive integer n, calculate the following sum:
//
// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.
//
// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

/** Function **/

function halvingSum(n) {
    // variable to hold the sum
    let sum = n;
    // while n > 1, half n and add it to the sum
    while (n > 1) {
        n = Math.floor(n/2);
        sum += n;
    }
    console.log(sum);
    return sum
}

/** Advanced Solution (Refactored) **/
// solution with recursion

function halvingSum(n) {
    if (n === 1) return n;
    else {return n += halvingSum(Math.floor(n/2))}
}

/** Test Cases **/

// halvingSum(25); // => 47
console.log(halvingSum(127)); // => 247
