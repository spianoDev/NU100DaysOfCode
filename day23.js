// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/javascript
// Level 8kyu

/** Directions **/

//You will be given an vector of string(s). You must sort it alphabetically (case-sensitive, and based on the ASCII
// values of the chars) and then return the first value.
//
// The returned value must be a string, and have "***" between each of its letters.
//
// You should not remove or add elements from/to the array.

/** Function **/

function twoSort(s) {
    // variable to hold the answer
    let answer = [];
    // sort the original array
    let orderedArray = s.sort();
    console.log(orderedArray);
    // grab the first value and loop through the characters
    for (let i = 0; i < orderedArray[0].length - 1; i++) {
        // add each character and three stars
        console.log(orderedArray[0][i]);
        answer.push(orderedArray[0][i] + '***');
    }
    answer.push(orderedArray[0][orderedArray[0].length - 1]);
    // return joined answer
    console.log(answer);
    return answer.join('');
}

/** Advanced Solution (Refactored) **/

function twoSort(s) {
   return s.sort()[0].split('').join('***');
}

/** Test Cases **/

// twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]);
// => 'b***i***t***c***o***i***n'
twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]);
// => 'a***r***e'
