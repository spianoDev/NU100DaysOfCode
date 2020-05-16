// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
// Level 8kyu

/** Directions **/

// Is the string uppercase?
//     Task
//     Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
//
//     "c".isUpperCase() == false
// "C".isUpperCase() == true
// "hello I AM DONALD".isUpperCase() == false
// "HELLO I AM DONALD".isUpperCase() == true
// "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
// "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any
// string containing no letters at all is trivially considered to be in ALL CAPS.

/** Function **/

String.prototype.isUpperCase = function() {
    console.log(String);
};


/** Test Cases **/

'c'.isUpperCase(); // => false, 'c is not upper case'
'C'.isUpperCase(); // => true, 'C is upper case'
'hello I AM DONALD'.isUpperCase(); // => false, 'hello I AM DONALD not is upper case'
'HELLO I AM DONALD'.isUpperCase(); // => true, 'HELLO I AM DONALD is upper case'
'ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(); // => false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case'
'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(); // => true,
