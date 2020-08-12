// https://www.codewars.com/kata/52dffa05467ee54b93000712/train/javascript
// Level 6kyu

/** Directions **/

// Given a standard english sentence passed in as a string, write a method that will return a sentence made up of the
// same words, but sorted by their first letter. However, the method of sorting has a twist to it:
//
// All words that begin with a lower case letter should be at the beginning of the sorted sentence, and sorted in ascending order.
// All words that begin with an upper case letter should come after that, and should be sorted in descending order.
// If a word appears multiple times in the sentence, it should be returned multiple times in the sorted sentence.
// Any punctuation must be discarded.
//
// Example
// For example, given the input string "Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!",
// your method should return "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut".
// Lower case letters are sorted a -> l -> l -> o -> o -> t and upper case letters are sorted V -> T -> O -> M -> L -> C.

/** Function **/
function sort(sentence){
    let words = sentence.split(" ").sort();
    let lowerWords = [];
    let capWords = [];
    for (let word of words) {
        if (word[0] === word[0].toUpperCase()) {
            capWords.unshift(word.replace(/\W/g, ''));
        } else {
            lowerWords.push(word.replace(/\W/g, ''));
        }
    }
    console.log(lowerWords.concat(capWords).join(' '));
    return lowerWords.concat(capWords).join(' ');
}

/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

// sort("I, habitan of the Alleghanies, treating of him as he is in himself in his own rights");
// => "as habitan he him himself his in in is of of own rights the treating I Alleghanies"
// sort("take up the task eternal, and the burden and the lesson");
// // => "and and burden eternal lesson take task the the the up"
// sort("Land of the Old Thirteen! Massachusetts land! land of Vermont and Connecticut!");
// // => "and land land of of the Vermont Thirteen Old Massachusetts Land Connecticut"
sort("Pioneers, O Pioneers!");
// => "Pioneers Pioneers O"
