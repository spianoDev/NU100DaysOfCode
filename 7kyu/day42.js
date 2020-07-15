// https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1
// Level 7kyu

/** Directions **/

//Given a string and an array of integers representing indices, capitalize all letters at the given indices.
//
// For example:
//
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.
//
// Good luck!

/** Function **/

function capitalize(s,arr){
    // split s
    let str = s.split('');
    // loop through the arr
    for (let idx of arr) {
        // change to uppercase as long as the index exists
        if (idx < str.length) {
            str[idx] = str[idx].toUpperCase();
        }
    }
    // return joined value
    console.log(str.join(''));
    return str.join('');
}

/** Advanced Solution (Refactored) **/

function capitalize(s,arr){
    let str = s.split('');
    let replace = arr.map((item) => item < s.length ? str[item] = str[item].toUpperCase() : str);
    return str.join('');
}

/** Test Cases **/

capitalize("abcdef",[1,2,5]); // => 'aBCdeF'
// capitalize("abcdef",[1,2,5,100]); // => 'aBCdeF'
// capitalize("codewars",[1,3,5,50]); // => 'cOdEwArs'
// capitalize("abracadabra",[2,6,9,10]); // => 'abRacaDabRA'
// capitalize("codewarriors",[5]); // => 'codewArriors'
// capitalize("indexinglessons",[0]); // => 'Indexinglessons'

