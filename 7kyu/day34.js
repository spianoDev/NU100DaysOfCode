// https://www.codewars.com/kata/5b16490986b6d336c900007d
// Level 7kyu

/** Directions **/

//You are given a dictionary/hash/object containing some languages and your test results in
// the given languages. Return the list of languages where your test score is at least 60,
// in descending order of the results.
//
// Note: the scores will always be unique (so no duplicate values)
//
// Examples
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []

/** Function **/

// function myLanguages(results) {
//     // variable to hold the answer
//     let pairs = [];
//     let languages = [];
//     // console.log(Object.keys(results), Object.values(results));
//     // loop through the values in the results object
//     for (let language of Object.keys(results)) {
//         pairs.push([language, results[language]]);
//     }
//     // sort the pairs
//     pairs = pairs.sort((a,b) => b[1] - a[1]);
//     // loop through pairs and determine which languages have passing scores
//     for (let value of pairs) {
//         console.log(value[1]);
//         // if statement to add the correctly scoring values to the languages array
//         if (value[1] >= 60) {
//             languages.push(value[0]);
//         }
//     }
//     console.log(pairs, languages);
//     // return answer
//     return languages;
// }

/** Advanced Solution (Refactored) **/

function languagePairs(results) {
    return Object.keys(results).map((language => [language, results[language]]));
}

function myLanguages(results) {
    let languages = [];
    languagePairs(results).sort((a,b) => b[1] - a[1]).filter((value => {if (value[1] >= 60) {languages.push(value[0])}}));
    return languages;
}

/** Test Cases **/

myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}); // => ["Ruby", "Python"])
// myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}); // => ["Dutch", "Greek", "Hindi"])
// myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}); // => [])
