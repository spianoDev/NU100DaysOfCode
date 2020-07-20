// https://www.codewars.com/kata/55968ab32cf633c3f8000008
// Level 7kyu

/** Directions **/

//Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.
//
// Similar to those kinda names we need to initialize the names.
//
// See the pattern below:
//
// initials('code wars') => returns C.Wars
// initials('Barack Hussain obama') => returns B.H.Obama
// Complete the function initials.

/** Function **/

function initials(n){
    // variable for the answer and the split n
    let answer = [];
    let names = n.split(' ');
    console.log(names);
// grab the first letter of the all the names except the final one and make capital
    for (let i = 0; i < names.length - 1; i++) {
        answer.push(names[i][0].toUpperCase(), '.');
    }
    // grab the final name and capitalize the first letter
    answer.push(names[names.length -1][0].toUpperCase(), names[names.length -1].slice(1));
    console.log(answer);
    // return the joined answer
    return answer.join('');
}

/** Advanced Solution (Refactored) **/

function initials(n){
    let answer = n.split(' ').map((name) => name[0].toUpperCase()).join('.');
    return answer + n.slice(n.lastIndexOf(" ") + 2);
}

/** Test Cases **/

// initials('code wars'); // => 'C.Wars'
// initials('Barack hussain obama'); // => 'B.H.Obama'
initials('barack hussain Obama'); // => 'B.H.Obama'
initials('sarah m panaligan'); // => 'S.M.Panaligan'
