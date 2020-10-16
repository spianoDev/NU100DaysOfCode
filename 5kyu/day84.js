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
// function consecutiveSquares(num) {
//     let sum = 0;
//     let lowerBound = 1;
//     let upperBound = 1;
//     let max = Math.floor(Math.sqrt(num));
//     while (sum !== num) {
//         if (sum < num) {
//             upperBound++;
//             sum += upperBound * upperBound;
//         } else if (sum > num) {
//             sum -= lowerBound * lowerBound;
//             lowerBound++;
//         }
//         if (upperBound < max) {
//             console.log(num);
//         }
//
//     }
// }
//  consecutiveSquares(1000);

// let sequenceOptions = [];

// function findConsecutiveSquares(num) {
//     let iterator = 10;
//
//     function consecutiveSquares(iterator, n) {
//         let option = num ** 2;
//         while (iterator > 0) {
//             option += (num + iterator) ** 2;
//             console.log(option);
//             if (option.toString() === option.toString().split('').reverse().join('')) {
//                 sequenceOptions.push(option);
//             }
//             iterator -= 1;
//             n += 1;
//         }
//     }
//     consecutiveSquares(10);
//
//
//     while (num > 0) {
//         let option = num ** 2 + (num + 1) ** 2;
//         if (option.toString() === option.toString().split('').reverse().join('')) {
//             sequenceOptions.push(option);
//         }
//         num--;
//     }
// }
// trying to refactor the consecutive squares functions, but just cannot see the solution yet...



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
function findElevenConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2 + (num + 6) ** 2 + (num + 7) ** 2 + (num + 8) ** 2 + (num + 9) ** 2 + (num + 10) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
function findTwelveConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2 + (num + 6) ** 2 + (num + 7) ** 2 + (num + 8) ** 2 + (num + 9) ** 2 + (num + 10) ** 2 + (num + 11) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
function findThirteenConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2 + (num + 6) ** 2 + (num + 7) ** 2 + (num + 8) ** 2 + (num + 9) ** 2 + (num + 10) ** 2 + (num + 11) ** 2 + (num + 12) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
function findFourteenConsecutiveSquares(num) {
    while (num > 0) {
        let option = num ** 2 + (num + 1) ** 2 + (num + 2) ** 2 + (num + 3) ** 2 + (num + 4) ** 2 + (num + 5) ** 2 + (num + 6) ** 2 + (num + 7) ** 2 + (num + 8) ** 2 + (num + 9) ** 2 + (num + 10) ** 2 + (num + 11) ** 2 + (num + 12) ** 2 + (num + 13) ** 2;
        if (option.toString() === option.toString().split('').reverse().join('')) {
            sequenceOptions.push(option);
        }
        num--;
    }
}
//
// findTwoConsecutiveSquares(3000);
// findThreeConsecutiveSquares(3000);
// findFiveConsecutiveSquares(3000);
// findSixConsecutiveSquares(3000);
// findSevenConsecutiveSquares(3000);
// findNineConsecutiveSquares(3000);
// findTenConsecutiveSquares(3000);
// findElevenConsecutiveSquares(3000);
// findTwelveConsecutiveSquares(3000);
// findThirteenConsecutiveSquares(3000);
// findFourteenConsecutiveSquares(3000);
let sequenceOptions = [];

function findConsecutiveSquares(num, k) {
    let n = num;

    for (let i = 1; i <= k; i++) {
        let sum = k ** 2;
        sum += (k - i) ** 2;
        console.log(sum)
        while (num > 0) {
            // let option = sum;
            if (sum.toString() === sum.toString().split('').reverse().join('')) {
                sequenceOptions.push(sum);
            }
            num--;
        }
        num = n;
    }
}
findConsecutiveSquares(100, 10);
// let options = sequenceOptions.sort((a,b) => a - b);
console.log(sequenceOptions);
function values(n){
    let count = 0;
    for (let num of sequenceOptions) {
        if (num <= n) {
            count += 1;
        }
    }
    console.log(count);
    return count;
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

values(100); // => 3
values(200); // => 4
values(300); // => 4
values(400); // => 5
values(1000); // => 11
