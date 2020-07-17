// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript
// Level 7kyu

/** Directions **/

//The vowel substrings in the word codewarriors are o,e,a,io.
// The longest of these has a length of 2.
// Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces,
// return the length of the longest vowel substring. Vowels are any of aeiou.

/** Function **/

function solve(s){
    // variable for the vowels and the total number of vowels in a row and the vowels themselves
    let vowelCount = 0;
    let total = 0;
    let regex = /[aeiou]/;
    // loop through the characters of s
    for (let i = 0; i < s.length; i++) {
        // look for vowels only
        if (regex.test(s[i])) {
            // if vowel, add to count and make the total equal to that count
            vowelCount += 1;
            if (total < vowelCount) {
                total = vowelCount;
            }
        } else {
            // but if a consonant, reset the vowel count
            vowelCount = 0;
        }
    }
    console.log(total, vowelCount);
    return total;
}

/** Advanced Solution (Refactored) **/

// no refactor tonight :)

/** Test Cases **/

// solve("codewarriors"); // => 2
// solve("suoidea"); // => 3
// solve("ultrarevolutionariees"); // => 3
// solve("strengthlessnesses"); // => 1
// solve("cuboideonavicuare"); // => 2
// solve("chrononhotonthuooaos"); // => 5
solve("iiihoovaeaaaoougjyaw"); // => 8
