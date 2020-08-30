// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript
// Level 6kyu

/** Directions **/

//I love Fibonacci numbers in general, but I must admit I love some more than others.
//
// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
//
// For example:
//
//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.
//
// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

/** Function **/

function nthFibo(n) {
    let fibonacci = [0, 1];
    for (let i = 2; i < n; i++) {
        let sum = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(sum);
    }
    console.log(fibonacci);
    return fibonacci[n-1];
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

nthFibo(1); // => 0,"1-st Fibo"
// nthFibo(2); // => 1,"2-nd Fibo"
// nthFibo(3); // => 1,"3-rd Fibo"
nthFibo(4); // => 2,"4-th Fibo"
nthFibo(19);
