// https://www.codewars.com/kata/52dbae61ca039685460001ae
// Level 7kyu

/** Directions **/

//Create a function which accepts one arbitrary string as an argument, and return a string of length 26.
//
// The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether
// the Nth letter of the alphabet is present in the input (independent of its case).
//
// So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the
// output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.
//
// For instance:
//
// "a   **&  cZ"  =>  "10100000000000000000000001"

/** Function **/

function change(string){
    // first need string with all 0
    // let letters = '00000000000000000000000000';
    let letters = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    console.log(letters.length)
    let indexValues = [];
    // search for letters and log the index values
    let regex = /[^a-z]/;
    for (let char of string) {
        if (!char.toLowerCase().match(regex)) {
            console.log(char.toLowerCase().charCodeAt(0) - 97);
            indexValues.push(char.toLowerCase().charCodeAt(0) - 97);
            // answer = letters.substring(char.toLowerCase().charCodeAt(0) - 97).replace('0', '1');
        }
    }
    // replace 0 with 1 for each index value
    for (let i = 0; i < indexValues.length; i++) {
        letters.splice(indexValues[i], 1);
        letters.splice(indexValues[i], 0, 1);
    }
    // return final string
    console.log(letters.join('').toString());
    return letters.join('').toString();
}

/** Advanced Solution (Refactored) **/

// no refactor today because I'm tired and it's friday 

/** Test Cases **/

change("a **&  bZ"); // => "11000000000000000000000001"
