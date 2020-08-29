// https://www.codewars.com/kata/59c01248bf10a47bd1000046/train/javascript
// Level 6kyu

/** Directions **/

//I will give you a string. You respond with "VALID" if the string meets the requirements or "INVALID" if it does not.
//
// Passwords must abide by the following requirements:
//
// More than 3 characters but less than 20.
//
// Must contain only alphanumeric characters.
//
// Must contain letters and numbers.

/** Function **/

function validPass(password){
    if (password.length > 3 && password.length < 20) {
        // return valid if there are both letters and numbers and nothing else
        let alphaRegex = /[a-zA-Z]/g;
        let numRegex = /[0-9]/g;
        let invalidChar = /[^a-zA-Z0-9]/g;
        if (password.match(alphaRegex) && password.match(numRegex)) {
            console.log('has a letter and number');
            if (invalidChar.test(password)) {
                console.log('there is an invalid character!');
                return 'INVALID';
            } else {
                console.log('Good job on making a valid password');
                return 'VALID';
            }
        } else {
            console.log('Missing a letter or number');
            return 'INVALID'
        }
    } else {
        return 'INVALID';
    }
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// validPass('Username123'); // => 'VALID'
// validPass('Username'); // => 'INVALID'
// validPass('1Username'); // => 'VALID'
// validPass('123'); // => 'INVALID'
// validPass('a12'); // => 'INVALID'
// validPass('Username123!'); // => 'INVALID'
// validPass('ThisPasswordIsTooLong1234'); // => 'INVALID'
// validPass('##$%');
validPass('sarah');
