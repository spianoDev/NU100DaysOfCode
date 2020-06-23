// https://www.codewars.com/kata/59cfc000aeb2844d16000075
// Level 7kyu

/** Directions **/

//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and
// return as shown below. Index 0 will be considered even.
//
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//
// The input will be a lowercase string with no spaces.
//
// Good luck!

/** Function **/

function capitalize(s){
    // need variables to hold the new strings
    let evenCaps = '';
    let oddCaps = '';
    // loop through each character in the string
    for (let i = 0; i < s.length; i++) {
        // make all even index values uppercase and odd lowercase, append to the evenCaps variable
        if (i % 2 === 0) {
            evenCaps += s[i].toUpperCase();
        } else {
            evenCaps += s[i].toLowerCase();
        }
    }
    console.log(evenCaps);
    // loop through each character in the string
    for (let j = 0; j < s.length; j++) {
        // make all odd index values uppercase and even lowercase, append to the oddCaps variable
        if (j % 2 === 0) {
            oddCaps += s[j].toLowerCase();
        } else {
            oddCaps += s[j].toUpperCase();
        }
    }
    console.log(oddCaps);
    // push the two variables into a final array
    console.log([evenCaps, oddCaps]);
    return [evenCaps, oddCaps];
}

/** Advanced Solution (Refactored) **/

function capitalize(s){
    let evenCaps = '';
    let oddCaps = '';
    function evenOdd (str1, str2) {
        for (let i = 0; i < s.length; i++) {
           evenCaps += i % 2 === 0 ? str1[i].toUpperCase() : str2[i].toLowerCase();
           oddCaps += i % 2 === 0 ? str1[i].toLowerCase() : str2[i].toUpperCase();
        }
    }
    evenOdd(s,s);
    return [evenCaps, oddCaps];
}

/** Test Cases **/

capitalize("abcdef"); // => ['AbCdEf', 'aBcDeF']
// capitalize("codewars"); // => ['CoDeWaRs', 'cOdEwArS']
// capitalize("abracadabra"); // => ['AbRaCaDaBrA', 'aBrAcAdAbRa']
// capitalize("codewarriors"); // => ['CoDeWaRrIoRs', 'cOdEwArRiOrS']
