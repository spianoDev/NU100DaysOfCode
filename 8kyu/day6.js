// https://www.codewars.com/kata/5ae62fcf252e66d44d00008e/train/javascript
// Level 8kyu

/** Directions **/

// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
//
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

/** Function **/

function expressionMatter(a, b, c) {
    // We can compare each possible case (this is called 'brut force' coding)
    let total = 0;
    let case1 = a * b * c;
    let case2 = a + b + c;
    let case3 = a * b + c;
    let case4 = a + b * c;
    let case5 = (a + b) * c;
    let case6 = a * (b + c);
    if (total < case1) {
        total = case1;
    } if (total < case2) {
        total = case2;
    } if (total < case3) {
        total = case3;
    } if (total < case4) {
        total = case4;
    } if (total < case5) {
        total = case5;
    } if (total < case6) {
        total = case6;
    }
    console.log(total);
    return total;
}

/** Advanced Solution (Refactored) **/

function expressionMatter(a, b, c) {
    let total = 0;
    let cases = [
        {'ex': total = a * b * c},
        {'ex': total = a + b + c},
        {'ex': total = a * b + c},
        {'ex': total = a + b * c},
        {'ex': total = (a + b) * c},
        {'ex': total = a * (b + c)}
        ];
    for (let i = 0; i < cases.length; i++) {
        if (total < cases[i].ex) {
            total = cases[i].ex;
        }
    }
    console.log(total);
    return total;
}

/** Test Cases **/

expressionMatter(2, 1, 2); // => 6
expressionMatter(2, 1, 1); // => 4
// expressionMatter(1, 1, 1); // => 3
expressionMatter(1, 2, 3); // => 9
// expressionMatter(1, 3, 1); // => 5
// expressionMatter(2, 2, 2); // => 8

