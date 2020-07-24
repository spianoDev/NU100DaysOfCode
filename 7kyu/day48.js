// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
// Level 7kyu

/** Directions **/

//Given the triangle of consecutive odd numbers:
//
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
//
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

/** Function **/


function rowSumOddNumbers(n) {
    // store n in a static variable
    let row = n;

    // so it looks like the row number can be determined with a function
    function lastNum(num) {
        while (n > 1) {
            num += n - 1;
            n--;
        }
        return (num * 2) - 1;
    }

    // now that we know what the last num is in the desired line, we can add n subsequent numbers together for the
    // answer by making that a variable
    let endOfRow = lastNum(n);
    let sum = 0;
    while (row > 0) {
        sum += endOfRow;
        row--;
        endOfRow -= 2;
    }
    console.log(sum);
    return sum;
}

/** Advanced Solution (Refactored) **/

// Long day so no refactor...

/** Test Cases **/

// rowSumOddNumbers(1); // => 1
// rowSumOddNumbers(2); // => 8
rowSumOddNumbers(3); // => 27
// rowSumOddNumbers(4); // => 56
rowSumOddNumbers(42); // => 74088
