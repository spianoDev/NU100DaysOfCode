// https://www.codewars.com/kata/57a6633153ba33189e000074
// Level 7kyu

/** Directions **/

//Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.
//
// Example:
//
// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

/** Function **/

const orderedCount = (text) => {
    // need a variable to hold a dictionary of values with letter key and count value
    let counted = {};
    // loop through the characters of text and add to dictionary
    for (let char of text) {
        // need the extra space to preserve the order of string when character is a number
        counted[" " + char] = (counted[" " + char] || 0) + 1;
    }
    // use built in method to return a sorted list of the Object's entries
    let finalAnswer = [];
    // delete the extra space in each 'key'
    for (let values of Object.entries(counted)) {
        finalAnswer.push([values[0].slice(1), values[1]]);
    }
    console.log(finalAnswer);
    return finalAnswer;
};

/** Advanced Solution (Refactored) **/

const orderedCount = (text) => {
    let counted = {};
    for (let char of text) {
        counted[" " + char] = (counted[" " + char] || 0) + 1;
    }
    return Object.entries(counted).map((values) => [values[0].slice(1), values[1]]);
};

/** Test Cases **/

orderedCount("abracadabra"); // => [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
// orderedCount("Code Wars"); // =>  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
orderedCount("233312"); // => [['2', 2], ['3', 3], ['1', 1 ]]
// orderedCount("231222321");
