// https://www.codewars.com/kata/5650ab06d11d675371000003/train/javascript
// Level 7kyu

/** Directions **/

//The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
//
// Example:
//
// Split the below string into other strings of size #3
//
// 'supercalifragilisticexpialidocious'
//
// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'
// Assumptions:
//
// String length is always greater than 0
// String has no spaces
// Size is always positive

/** Function **/

let splitInParts = (s, partLength) => {
    // variable to hold the answer
    let answer = [];
    // loop through s and insert a space every nth index
    for (let i = 0; i < s.length; i++) {
        if (i % partLength !== 0 || i === 0) {
            answer.push(s[i]);
        } else {
            answer.push(' ', s[i]);
        }
    }
    console.log(answer.join(''));
    return answer.join('');
};

/** Advanced Solution (Refactored) **/

let splitInParts = (s, partLength) => {
    return s.split('').map((char, idx) => (idx % partLength !== 0 || idx === 0) ? s = char : s = ' ' + char).join('');
};


/** Test Cases **/

console.log(splitInParts("supercalifragilisticexpialidocious", 3)); // => "sup erc ali fra gil ist ice xpi ali doc iou s"
// console.log(splitInParts("HelloKata", 1)); // => "H e l l o K a t a"
// console.log(splitInParts("HelloKata", 9)); // => "HelloKata"
