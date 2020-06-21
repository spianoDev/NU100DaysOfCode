// https://www.codewars.com/kata/56f173a35b91399a05000cb7/train/javascript
// Level 8kyu

/** Directions **/

//Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value.
// Output should be the length of the longest word, as a number.
//
// There will only be one 'longest' word.
// The original function with bugs:
// ,function findLongest(str) (
//
// var spl = str.split(" ");
// var longest = 0
//
// for (var i = 0; i > spl.length; i+) (
//     ,   if (spl(i).length > longest) {
//     longest = spl[i].length
// )
// }
// return longest
// )

/** Function **/
//remove comma in front of function and add curly braces, remove parenthesis
function findLongest(str) {

var spl = str.split(" ");
// add semicolon
var longest = 0;
// change greater than to less than and add another plus sign, add curly braces, remove parenthesis
for (var i = 0; i < spl.length; i++) {
    // remove comma and replace parenthesis with brackets
    if (spl[i].length > longest) {
        longest = spl[i].length
    }
}
console.log(longest);
return longest
}

/** Advanced Solution (Refactored) **/

// an alternate solution:

function findLongest(str) {
    let wordsByLength = str.split(' ').sort((a, b) => b.length - a.length);
    return wordsByLength[0].length;
}

/** Test Cases **/

findLongest("The quick white fox jumped around the massive dog"); // => 7
findLongest("Take me to tinseltown with you"); // => 10
findLongest("Sausage chops"); // => 7
findLongest("Wind your body and wiggle your belly"); // => 6
findLongest("Lets all go on holiday"); // => 7
