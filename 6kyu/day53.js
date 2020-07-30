// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
// Level 6kyu

/** Directions **/

//     Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to contain
//only alphabets (both uppercase and lowercase) and numeric digits.
//
//     Example
//     "abcde" -> 0 # no characters repeats more than once
//     "aabbcde" -> 2 # 'a' and 'b'
//     "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//     "indivisibility" -> 1 # 'i' occurs six times
//     "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//     "aA11" -> 2 # 'a' and '1'
//     "ABBA" -> 2 # 'A' and 'B' each occur twice
//

/** Function **/

function duplicateCount(text){
   // change all the alpha characters to lower case
   text = text.toLowerCase();
  // variable to hold the frequency counter
  let counter = {};
  // variable to hold number of duplicates
  let duplicateCounter = 0;
  // loop through the text string and create a counter for each character in the text
  for (let char of text) {
  counter[char] = (counter[char] || 0) + 1;
  }
  console.log(Object.values(counter));
  // add to the duplicateCounter if the value is more than 1
 for (let value of Object.values(counter)) {
    if (value > 1) {
    duplicateCounter += 1;
    }
  }
    console.log(duplicateCounter);
    return duplicateCounter;
}

/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

duplicateCount(""); // => 0
// duplicateCount("abcde"); // => 0
// duplicateCount("aabbcde"); // => 2
duplicateCount("aabBcde"); // => 2,"should ignore case"
duplicateCount("Indivisibility"); // => 1
// duplicateCount("Indivisibilities"); // => 2, "characters may not be adjacent"

