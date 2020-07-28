// https://www.codewars.com/kata/56a5d994ac971f1ac500003e
// Level 6kyu

/** Directions **/

//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string
// consisting of k consecutive strings taken in the array.
//
// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
//
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

/** Function **/

function longestConsec(arr, k) {
    // array to hold answers
    let options = [];
    // edge case of k < or = 0
    if (k <= 0 || arr.length < k) {
        console.log('empty string');
        return '';
    } else {
        // loop through the array
        for (let i = 0; i <= arr.length - k; i++) {
            let joinedString = '';
            // need to add the strings together for the length of k
            let strings = k;
            let temp = i;
            while (strings > 0) {
                joinedString += arr[temp];
                strings--;
                temp++;
            }
            options.push(joinedString);
        }
    }
    console.log(options);
    // loop through options and determine which option is the longest.
    let stringLength = 0;
    let answer = '';
    for (let word of options) {
        if (stringLength < word.length) {
            stringLength = word.length;
            answer = word;
        }
    }
    console.log(answer);
    return answer;
}

/** Advanced Solution (Refactored) **/

// Long day today, so no refactor.

/** Test Cases **/

// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2); // => "abigailtheta"
// longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1); // => "oocccffuucccjjjkkkjyyyeehh"
// longestConsec([], 3); // => ""
// longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2); // => "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2); // => "wlwsasphmxxowiaxujylentrklctozmymu"
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2); // => ""
longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3); // => "ixoyx3452zzzzzzzzzzzz"
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15); // => ""
// longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0); // => ""


