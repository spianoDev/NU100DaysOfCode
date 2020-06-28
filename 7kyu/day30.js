// https://www.codewars.com/kata/5a262cfb8f27f217f700000b
// Level 7kyu

/** Directions **/

//In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
//
// For example:
//
// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.
// Notice also that you return the characters from the first string concatenated with those from the second string.

/** Function **/

function solve(a,b){
    let idx = 0;
    let newA = a;
    let newB = b;
    while (idx < a.length) {
        for (let bChar of b) {
            if (a[idx] === bChar) {
                newB = newB.replace(a[idx], '');
            }
        }
        idx += 1;
    }
    let i = 0;
    while (i < b.length) {
        for (let aChar of a) {
            if (b[i] === aChar) {
                newA = newA.replace(b[i], '');
            }
        }
        i += 1;
    }
    // return the result
    console.log(newA, newB);
    return newA + newB;
}


/** Advanced Solution (Refactored) **/

// I struggled with this one and I'm going to take a pass on refactor.

/** Test Cases **/

solve("xyab","xzca"); // => "ybzc"
solve("xyabb","xzca"); // => "ybbzc"
solve("abcd","xyz"); // => "abcdxyz"
solve("xxx","xzca"); // => "zca"

