// https://www.codewars.com/kata/5245a9138ca049e9a10007b8
// Level 6kyu

/** Directions **/

//You know how sometimes you write the the same word twice in a sentence, but then don't notice that it happened?
// For example, you've been distracted for a second.
// Did you notice that *"the"* is doubled in the first sentence of this description?
//
// As as aS you can see, it's not easy to spot those errors, especially if words differ in case,
// like *"as"* at the beginning of the sentence.
//
// Write a function that counts the number of sections repeating the same word (case insensitive).
// The occurence of two or more equal words next after each other count as one.
//
// Example:
//
// "dog cat"                 --> 0
// "dog DOG cat"             --> 1
// "apple dog cat"           --> 0
// "pineapple apple dog cat" --> 0
// "apple     apple dog cat" --> 1
// "apple dog apple dog cat" --> 0
// "dog dog DOG dog dog dog" --> 1
// "dog dog dog dog cat cat" --> 2
// "cat cat dog dog cat cat" --> 3

/** Function **/

function countAdjacentPairs(searchString) {
    let words = searchString.toLowerCase().split(' ');
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === words[i + 1] && words[i + 2] !== words[i]) {
            count++;
        }
    }
    console.log(count);
    return count;
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// countAdjacentPairs(''); // => 0, 'An empty string should return 0.'
// countAdjacentPairs('orange Orange kiwi pineapple apple');
// => 1, "Case should be ignored. countAdjacentPairs('orange Orange kiwi pineapple apple')"
// countAdjacentPairs('banana banana banana');
// // => 1, "Once a word has been paired, it is ignored. countAdjacentPairs('banana banana banana')"
countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!');
// // 2, "Once a word has been paired, it is ignored. Grab all pairs. countAdjacentPairs('banana banana banana terracotta banana terracotta terracotta pie!')"
// countAdjacentPairs('pineapple apple'); // => 0, "A pineapple is not an apple. countAdjacentPairs('pineapple apple')"



