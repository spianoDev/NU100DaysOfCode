// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
// Level 8kyu

/** Directions **/

//Create a function that will return a string that combines all of the letters of the three inputed strings in groups.
// Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!
//
// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"
//
// Note: You can expect all of the inputs to be the same length.

/** Function **/

function tripleTrouble(one, two, three){
    //I need a variable to hold the new string
    let word = [];
    // loop through the length of one (since all three arguments have the same length)
    for (let i = 0; i < one.length; i++) {
        // add the first letter of each word to the new variable and continue adding the letters in succession
        word.push(one[i], two[i], three[i]);
    }
    console.log(word);
    // join and return the completed word
    return word.join('');
}

/** Advanced Solution (Refactored) **/

function tripleTrouble(one, two, three){
    let len = arguments[0].length;
    let word = [...arguments].map((response, idx) => one[idx] + two[idx] + three[idx]).slice(0, len).join('');
    console.log(word, len);
}

/** Test Cases **/

tripleTrouble("this","test","lock"); // => "ttlheoiscstk"
tripleTrouble("aa","bb","cc"); // => "abcabc"
tripleTrouble("Bm", "aa", "tn"); // => "Batman"
tripleTrouble("LLh","euo","xtr"); // => "LexLuthor"
