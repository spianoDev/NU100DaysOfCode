// https://www.codewars.com/kata/5a28cf591f7f7019a80000de
// Level 5kyu

/** Directions **/

//In this Kata, you will be given a string of numbers in sequence and your task will be to return the missing number.
// If there is no number missing or there is an error in the sequence, return -1.
//
// For example:
//
// missing("123567") = 4
// missing("899091939495") = 92
// missing("9899101102") = 100
// missing("599600601602") = -1 -- no number missing
// missing("8990919395") = -1 -- error in sequence. Both 92 and 94 missing.

/** Function **/

// function missing(s) {
//     let numDigits = 1;
//     let missingNum = [];
//     for (let i = 0; i < s.length; i++) {
//         // console.log(parseInt(s[i] + s[i + 1]));
//         // one digit numbers
//         if (parseInt(s[i]) === parseInt(s[i + 1]) - 1 ) {
//             console.log('Answer is 1 digit long', s[i]);
//             if (parseInt(s[i]) < parseInt(s[i + 1]) - 1 ) {
//                 console.log('looks like there might be a missing number of ' + parseInt(s[i]) - 1);
//             }
//
//
//         } // two digit numbers
//         else if (parseInt(s[i] + s[i + 1]) === parseInt(s[i + 2] + s[i + 3]) - 1) {
//             console.log('Answer is 2 digits long');
//             numDigits = 2;
//         } // three digit numbers
//         else if (parseInt(s[i] + s[i + 1] + s[i + 2]) === parseInt(s[i + 3] + s[i + 4] + s[i + 5]) - 1) {
//             console.log('Answer is 3 digits long');
//             numDigits = 3;
//         }
//         // if (parseInt(s[i]) - parseInt(s[i - 1]) === 1) {
//         //     console.log(s[i]);
//         // } else if (parseInt(s[i]) - parseInt(s[i - 1]) > 1) {
//         //     console.log('this is the answer ' + (parseInt(s[i]) - 1));
//         // } else if (parseInt(s[i]) - parseInt(s[i - 1]) < 1) {
//         //     console.log('might need to change digits');
//         //     numDigits++;
//         // }
//     }
// }

/** Advanced Solution (Refactored) **/
// I'm going to try again from a different direction

function missing(s) {
    let numDigits = 1;
    let oneDigit = [];
    for (let char of s) {
        oneDigit.push(char);
    }
    let twoDigit = [];
    for (let i = 0; i < s.length - 1; i+=2) {
        twoDigit.push(s[i]+s[i + 1]);
    }
    let threeDigit = [];
    for (let i = 0; i < s.length - 2; i+=3) {
        threeDigit.push(s[i]+s[i + 1]+s[i + 2]);
    }
console.log(oneDigit, twoDigit, threeDigit);
}
// No refactor today

/** Test Cases **/
// missing("123567"); // => 4
// missing("899091939495"); // => 92
missing("9899101102"); // => 100
// missing("599600601602"); // => -1
// missing("8990919395"); // => -1
// missing("998999100010011003"); // => 1002
// missing("99991000110002"); // => 10000
// missing("979899100101102"); // => -1
// missing("900001900002900004900005900006"); // => 900003
