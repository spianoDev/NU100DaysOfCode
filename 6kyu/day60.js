// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
// Level 6kyu

/** Directions **/

// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
//
// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
//
// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//
// For example, decode("h3 th2r2") would return "hi there".
//
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

/** Function **/
let code = {
    a: "1",
    e: "2",
    i: "3",
    o: "4",
    u: "5"
};

function encode(string) {
    let newString = [];
    for (let char of string) {
        console.log(char);
        if (char === 'a') {
            newString.push(code.a);
        } else if (char === 'e') {
            newString.push(code.e);
        } else if (char === 'i') {
            newString.push(code.i);
        } else if (char === 'o') {
            newString.push(code.o);
        } else if (char === 'u') {
            newString.push(code.u);
        } else {
            newString.push(char);
        }
    }
    console.log(newString.join(''));
    return newString.join('');
}

function decode(string) {
    let originalString = [];
    for (let char of string) {
        console.log(char);
        if (char === code.a) {
            originalString.push('a');
        } else if (char === code.e) {
            originalString.push('e');
        } else if (char === code.i) {
            originalString.push('i');
        } else if (char === code.o) {
            originalString.push('o');
        } else if (char === code.u) {
            originalString.push('u');
        } else {
            originalString.push(char);
        }
    }
    console.log(originalString.join(''));
    return originalString.join('');
}

/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

encode('hello'); // => 'h2ll4'
// encode('How are you today?'); // => 'H4w 1r2 y45 t4d1y?'
// encode('This is an encoding test.'); // => 'Th3s 3s 1n 2nc4d3ng t2st.'
decode('h2ll4'); // => 'hello'
