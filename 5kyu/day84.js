// https://www.codewars.com/kata/599b1a4a3c5292b4cc0000d5
// Level 5kyu

/** Directions **/

//The palindromic number 595 is interesting because it can be written as the sum of consecutive squares:
// 6^2 + 7^2 + 8^2 + 9^2 + 10^2 + 11^2 + 12^2 = 595.
//
// There are exactly eleven palindromes below one-thousand that can be written as consecutive square sums.
// Note that 1 = 0^2 + 1^2 has not been included as this problem is concerned with the squares of positive integers.
//
// Given an input n, find the count of all the numbers less than n that are both palindromic and can be written as the sum of consecutive squares.
//
// For instance: values(1000) = 11. See test examples for more cases.

/** Function **/
let sequenceOptions = [];
function findTwoConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
function findThreeConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
// there were no options for combinations of four
function findFiveConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
function findSixConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}

function findSevenConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2 + (num + 6) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
// there were no options for combinations of eight
function findNineConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2 + (num + 6) ** 2 + (num + 7) ** 2 + (num + 8) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
function findTenConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2 + (num + 6) ** 2 + (num + 7) ** 2 + (num + 8) ** 2 + (num + 9) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}

findTwoConsecutiveSquares(30);
findThreeConsecutiveSquares(30);
findFiveConsecutiveSquares(30);
findSixConsecutiveSquares(30);
findSevenConsecutiveSquares(30);
findNineConsecutiveSquares(30);
findTenConsecutiveSquares(30);
let options = sequenceOptions.sort((a,b) => a - b);
console.log(options);
function values(n){
   for (let i = 0; i <= n; i++) {
       if (i.toString().length > 1 && i.toString() === i.toString().split('').reverse().join('')) {
           console.log(i, test);

       }
   }
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// values(100); // => 3
// values(200); // => 4
// values(300); // => 4
// values(400); // => 5
// values(1000); // => 11
