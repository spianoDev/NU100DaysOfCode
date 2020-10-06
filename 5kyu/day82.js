// https://www.codewars.com/kata/55143152820d22cdf00001bb
// Level 5kyu

/** Directions **/

//It's 9 time!
//
// I want to count from 1 to n. How many times will I use a '9'?
//
// 9, 19, 91.. will contribute one '9' each, 99, 199, 919.. wil contribute two '9's each...etc
//
// Note: n will always be a positive integer.
//
// number9(8) //should return 0
// number9(9) //should return 1
// number9(10) //should return 1
// number9(98) //should return 18
// number9(100) //should return 20

/** Function **/

function number9(n){
    let nines = 0;
    let length = n.toString().length - 1;
    let baseNines = (length).toString() + '0'.repeat(length - 1);
    let additionalNines = length * parseInt((length-1).toString() + '0'.repeat(length - 2));
    console.log(baseNines, additionalNines);
    if (length < 7) {
        for (let num = baseNines; num <= n; num++) {
            if (num.toString().includes(9)) {
                for (let digit of num.toString()) {
                    if (digit === '9') {
                        nines += 1;
                    }
                }
            }
        }
    }
console.log(nines);
    if (parseInt(baseNines) > nines) {
        console.log('The answer is ' + baseNines);
        return parseInt(baseNines);
    } else {
        let answer = nines + additionalNines;
        console.log('Need to add ' + additionalNines + ' for an answer of ' + answer);
        return parseInt(baseNines) + nines;
    }
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// number9(1); // => 0, 'Nein!'
// number9(9); // => 1, 'Nein!'
// number9(100); // => 20, 'Nein!'
// number9(899);
// number9(10000); // => 4000
// number9(565754); // => 275645, 'Nein!'
// number9(999999);
number9(10000000000); // => 10000000000, 'Nein!'
