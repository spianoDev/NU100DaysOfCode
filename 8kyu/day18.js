// https://www.codewars.com/kata/5a00e05cc374cb34d100000d
// Level 8kyu

/** Directions **/

//Get the number n (n>0) to return the reversed sequence from n to 1.
//
// Example : n=5 >> [5,4,3,2,1]

/** Function **/

// const reverseSeq = n => {
//     // need a variable to hold the array
//     let reverseNumArray = [];
//     // starting with the provided number, add sequentially each number down to 1 to the array using a loop
//     for (n; n > 0; n--) {
//         reverseNumArray.push(n);
//     }
//     console.log(reverseNumArray);
//     return reverseNumArray;
// };

/** Advanced Solution (Refactored) **/

const reverseSeq = n => {
    return [...new Array(n).keys()].map((value, index) => {return n - index});
};

/** Test Cases **/

reverseSeq(5); // => [5, 4, 3, 2, 1]
