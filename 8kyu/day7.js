// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript
// Level 8kyu

/** Directions **/

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// Patrick Feeney => P.F

/** Function **/

// function abbrevName(name){
//     // First I need a variable to put the initials in
//     let initials = [];
//     // Now I need to separate the first and last names
//     let fullName = name.split(" ");
//     console.log(fullName);
//     // Next I need to grab only the first letter of the first name and make it uppercase
//     // initials.push(name[0]); // or
//     initials.push(fullName[0][0].toUpperCase());
//     // Then I need to add a period
//     initials.push('.');
//     // After that I need to grab the first letter of the second name and make it uppercase
//     initials.push(fullName[1][0].toUpperCase());
//     console.log(initials);
//     // Finally I need to join the initials and return the answer
//     let answer = initials.join('');
//     console.log(answer);
//     return answer;
// }

/** Advanced Solution (Refactored) **/

function abbrevName(name){
    for (let i = 0; i < name.length; i++) {
        if (name[i] === ' ') {
            return name[0].toUpperCase() + '.' + name[i + 1].toUpperCase();
        }
    }
}

/** Test Cases **/

// abbrevName("Sam Harris"); // => "S.H"
// abbrevName("Patrick Feenan"); // => "P.F"
// abbrevName("Evan Cole"); // => "E.C"
// abbrevName("P Favuzzi"); // => "P.F"
// abbrevName("David Mendieta"); // => "D.M"
abbrevName("marky mark"); // => "M.M"
