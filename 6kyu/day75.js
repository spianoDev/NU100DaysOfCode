// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d/train/javascript
// Level 6kyu

/** Directions **/

//In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter'
// as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.
//
// Example:
//
// letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

/** Function **/

function letterCount(s){
    let frequencyCount = {};
    for (let val of s){
        frequencyCount[val] = (frequencyCount[val] || 0) + 1;
    }
    console.log(frequencyCount);
    function sortedLetterCount(obj) {
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    }
    console.log(sortedLetterCount(frequencyCount));
    return sortedLetterCount(frequencyCount);
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// letterCount("codewars"); // => {"a": 1, "c": 1, "d": 1, "e": 1, "o": 1, "r": 1, "s": 1, "w": 1}
letterCount("activity"); // => {"a": 1, "c": 1, "i": 2, "t": 2, "v": 1, "y": 1}
// letterCount("arithmetics"); // => {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}
// letterCount("traveller"); // => {"a": 1, "e": 2, "l": 2, "r": 2, "t": 1, "v": 1}
// letterCount("daydreamer"); // => {"a": 2, "d": 2, "e": 2, "m": 1, "r": 2, "y": 1}

