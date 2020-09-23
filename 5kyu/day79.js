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
    console.log(s);
    let oneDigit = [];
    for (let i = 0; i < s.length - 1; i+=1) {
        if (parseInt(oneDigit[oneDigit.length - 1]) < 9 || oneDigit.length === 0) {
            oneDigit.push(s[i]);
        } else {
            oneDigit.push(s[i]+s[i + 1]);
            i+=1;
        }
    }
    let twoDigit = [];
    for (let i = 0; i < s.length - 1; i+=2) {
        if (parseInt(s[i]+s[i + 1]) > parseInt(twoDigit[0]) || twoDigit.length === 0) {
            twoDigit.push(s[i] + s[i + 1]);
        } else if (parseInt(s[i]+s[i + 1]) < parseInt(twoDigit[0]) ) {
            twoDigit.push(s[i]+s[i + 1]+s[i + 2]);
            i+=1;
        }
    }
    let threeDigit = [];
    for (let i = 0; i < s.length - 2; i+=3) {
        if (parseInt(s[i]+s[i + 1]+s[i + 2]) > parseInt(threeDigit[0]) || threeDigit.length === 0) {
            threeDigit.push(s[i] + s[i + 1] + s[i + 2]);
        } else if (parseInt(s[i]+s[i + 1]+s[i + 2]) < parseInt(threeDigit[0]) ) {
            threeDigit.push(s[i]+s[i + 1]+s[i + 2]+s[i + 3]);
            i+=1;
        }
    }
    let fourDigit = [];
    for (let i = 0; i < s.length - 2; i+=4) {
        if (parseInt(s[i]+s[i + 1]+s[i + 2] + s[i + 3]) > parseInt(fourDigit[0]) || fourDigit.length === 0) {
            fourDigit.push(s[i] + s[i + 1] + s[i + 2] + s[i + 3]);
        } else if (parseInt(s[i]+s[i + 1]+s[i + 2] + s[i + 3]) < parseInt(fourDigit[0]) ) {
            fourDigit.push(s[i]+s[i + 1]+s[i + 2]+s[i + 3] + s[i + 4]);
            i+=1;
        }
    }
    let fiveDigit = [];
    for (let i = 0; i < s.length - 2; i+=5) {
        if (parseInt(s[i]+s[i + 1]+s[i + 2] + s[i + 3] + s[i + 4]) > parseInt(fiveDigit[0]) || fiveDigit.length === 0) {
            fiveDigit.push(s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4]);
        } else if (parseInt(s[i]+s[i + 1]+s[i + 2] + s[i + 3] + s[i + 4]) < parseInt(fiveDigit[0]) ) {
            fiveDigit.push(s[i]+s[i + 1]+s[i + 2]+s[i + 3] + s[i + 4] + s[i + 5]);
            i+=1;
        }
    }
    let sixDigit = [];
    for (let i = 0; i < s.length - 2; i+=6) {
        if (parseInt(s[i]+s[i + 1]+s[i + 2] + s[i + 3] + s[i + 4] + s[i + 5]) > parseInt(sixDigit[0]) || sixDigit.length === 0) {
            sixDigit.push(s[i] + s[i + 1] + s[i + 2] + s[i + 3] + s[i + 4]  + s[i + 5]);
        } else if (parseInt(s[i]+s[i + 1]+s[i + 2] + s[i + 3] + s[i + 4]  + s[i + 5]) < parseInt(sixDigit[0]) ) {
            sixDigit.push(s[i]+s[i + 1]+s[i + 2]+s[i + 3] + s[i + 4] + s[i + 5]  + s[i + 6]);
            i+=1;
        }
    }
    function sortArr(arr) {
        arr = arr.sort((a,b) => a - b);
    }
    sortArr(oneDigit);
    sortArr(twoDigit);
    sortArr(threeDigit);
    sortArr(fourDigit);
    sortArr(fiveDigit);
console.log(oneDigit, twoDigit, threeDigit, fourDigit, fiveDigit, sixDigit);
    let answer;
    function findNum(arr) {
        answer = [];
        for (let n = arr.length - 1; n > 0; n--) {
            if (arr[n] === arr[n - 1]) {
                return answer = [];
            } if (parseInt(arr[n]) - parseInt(arr[n - 1]) > 2) {
                return answer = [];
            } if (parseInt(arr[n]) - parseInt(arr[n - 1]) === 2 && parseInt(arr[n - 1]) >= arr[0]) {
                answer.push(parseInt(arr[n]) - 1);
            }
        }
    }

    findNum(sixDigit);
    console.log(answer);
    if (answer.length === 1) {
        return answer[0];
    } else {
        findNum(fiveDigit);
        console.log(answer);
        if (answer.length === 1) {
            return answer[0];
        } else {
            findNum(fourDigit);
            console.log(answer);
            if (answer.length === 1) {
                return answer[0];
            } else {
                findNum(threeDigit);
                console.log(answer);
                if (answer.length === 1) {
                    return answer[0];
                } else {
                    findNum(twoDigit);
                    console.log(answer);
                    if (answer.length === 1) {
                        return answer[0];
                    } else {
                        findNum(oneDigit);
                        console.log(answer);
                        if (answer.length === 1) {
                            return answer[0];
                        } else {
                            console.log(-1);
                            return -1;
                        }
                    }
                }
            }
        }
    }
}
// No refactor today

/** Test Cases **/
// missing("123567"); // => 4
// missing("899091939495"); // => 92
// missing("9899101102"); // => 100
// missing("599600601602"); // => -1
// missing("8990919395"); // => -1
// missing("998999100010011003"); // => 1002
// missing("99991000110002"); // => 10000
// missing("979899100101102"); // => -1
// missing("900001900002900004900005900006"); // => 900003
// missing('606269606270606271606272606273606274606275606276606277606278606279'); // => -1
// missing('242527242528242529242530242531242532242533242534242535242536242537242538242539242540'); // => -1
// missing('447133447134447135447136447137447138447139447140447141447142447143447144447145447146'); // => -1
missing('01234678910111213'); // => 5
