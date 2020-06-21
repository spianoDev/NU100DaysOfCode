// https://www.codewars.com/kata/55acfc59c3c23d230f00006d/train/javascript
// Level 8kyu

/** Directions **/

// Get ASCII value of a character.
//
// For the ASCII table you can refer to http://www.asciitable.com/

/** Function **/

function getASCII(c){
    console.log(c.charCodeAt(0));
    return c.charCodeAt(0);
}

/** Advanced Solution (Refactored) **/

// there wasn't any refactoring for this one so I will provide a reference:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

/** Test Cases **/

getASCII('A'); // => 65
getASCII(' '); // => 32
getASCII('!'); // => 33



