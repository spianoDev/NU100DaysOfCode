// https://www.codewars.com/kata/56c30ad8585d9ab99b000c54/train/javascript
// Level 5kyu

/** Directions **/

//Your task is to Combine two Strings. But consider the rule...
//
// By the way you don't have to check errors or incorrect input values, everything is ok without bad tricks,
// only two input strings and as result one output string;-)...
//
// And here's the rule:
// Input Strings a and b: For every character in string a swap the casing of every occurrence of the same character in string b.
// Then do the same casing swap with the inputs reversed. Return a single string consisting of the changed version of a
// followed by the changed version of b. A char of a is in b regardless if it's in upper or lower case - see the testcases too.
// I think that's all;-)...
//
// Some easy examples:
//
// Input: "abc" and "cde"      => Output: "abCCde"
// Input: "ab" and "aba"       => Output: "aBABA"
// Input: "abab" and "bababa"  => Output: "ABABbababa"
// Once again for the last example - description from KenKamau, see discourse;-):
//
// a) swap the case of characters in string b for every occurrence of that character in string a
// char 'a' occurs twice in string a, so we swap all 'a' in string b twice. This means we start with "bababa" then "bAbAbA" => "bababa"
// char 'b' occurs twice in string a and so string b moves as follows: start with "bababa" then "BaBaBa" => "bababa"
//
// b) then, swap the case of characters in string a for every occurrence in string b
// char 'a' occurs 3 times in string b. So string a swaps cases as follows: start with "abab" then => "AbAb" => "abab" => "AbAb"
// char 'b' occurs 3 times in string b. So string a swaps as follow: start with "AbAb" then => "ABAB" => "AbAb" => "ABAB".
//
// c) merge new strings a and b
// return "ABABbababa"

/** Function **/

function workOnStrings(a,b){
    let frequencyCounterA = {};
    let frequencyCounterB = {};
    for (let char of a.toLowerCase()) {
        frequencyCounterA[char] = (frequencyCounterA[char] || 0) + 1;
    }
    for (let char of b.toLowerCase()) {
        frequencyCounterB[char] = (frequencyCounterB[char] || 0) +1;
    }
    console.log(frequencyCounterA, frequencyCounterB);
    let matchingKeys = Object.keys(frequencyCounterA).filter(key => Object.keys(frequencyCounterB).includes(key));
    console.log(matchingKeys);
    let newA;
    for (let commonKey of matchingKeys) {
        if (frequencyCounterB[commonKey] % 2 === 1 && a.match(commonKey)) {
            newA = a.split('').splice(a.indexOf(commonKey), 1, commonKey.toUpperCase());
            // a = a.replace(commonKey, commonKey.toUpperCase());
        } else
            // if (frequencyCounterB[commonKey] % 2 === 1 && a.match(commonKey.toUpperCase()))
            {
              newA = a.split('').splice(a.indexOf(commonKey.toUpperCase()), 1, commonKey);
            // a = a.replace(commonKey.toUpperCase(), commonKey);
        }
        if (frequencyCounterA[commonKey] % 2 === 1 && b.match(commonKey)) {
            b = b.replace(new RegExp(commonKey, 'g'), commonKey.toUpperCase());
        } else
            // if (frequencyCounterA[commonKey] % 2 === 1 && b.match(new RegExp(commonKey.toUpperCase(), 'g')))
            {
                console.log('arrived here');
            b = b.replace(new RegExp(commonKey.toUpperCase(), 'g'), commonKey);
        }
    }
    console.log(newA, b);
    return a.concat(b);
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// workOnStrings("abc","cde"); // => "abCCde"
workOnStrings("abcdeFgtrzw", "defgGgfhjkwqe"); // => "abcDeFGtrzWDEFGgGFhjkWqE"
// workOnStrings("abcdeFg", "defgG"); // => "abcDEfgDEFGg"
// workOnStrings("abab", "bababa"); // => "ABABbababa"
