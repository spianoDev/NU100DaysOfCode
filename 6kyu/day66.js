// https://www.codewars.com/kata/52cd53948d673a6e66000576/train/javascript
// Level 6kyu

/** Directions **/

// The function must return the sequence of titles that match the string passed as an argument.
//
// TITLES is a preloaded sequence of strings.
//
// TITLES = ['Rocky 1', 'Rocky 2', 'My Little Poney']
// search('ock') --> ['Rocky 1', 'Rocky 2']
// But the function return some weird result and skip some of the matching results.

// The original function:
// TITLES is a preloaded array of String to search through

// function search(searchTerm) {
//     var search = new RegExp(searchTerm, 'gi');
//
//     return TITLES.filter(function(title) {
//         return search.test(title);
//     });
// }

let TITLES = [ 'The Big Bang Theory',
    'How I Met Your Mother',
    'Dexter',
    'Breaking Bad',
    'Doctor Who',
    'The Hobbit',
    'Pacific Rim',
    'Pulp Fiction',
    'The Avengers',
    'Shining' ];
/** Function **/

// since the original function was missing a value, I decided to use a different built in method

function search(searchTerm) {
    let noCase = searchTerm.toLowerCase();
    let answer = [];
    for (let title of TITLES) {
        if (title.toLowerCase().includes(noCase)) {
            answer.push(title);
        }
    }
    console.log(answer);
    return answer;
}

/** Advanced Solution (Refactored) **/

function search(searchTerm) {
    return TITLES.filter(title => title.toLowerCase().includes(searchTerm.toLowerCase()) ? title : console.log('skip'));
}

/** Test Cases **/

// search('ho'); // => ['How I Met Your Mother', 'Doctor Who', 'The Hobbit']
console.log(search('th'));
