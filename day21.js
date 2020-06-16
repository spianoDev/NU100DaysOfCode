// https://www.codewars.com/kata/57a429e253ba3381850000fb
// Level 8kyu

/** Directions **/

//Write function bmi that calculates body mass index (bmi = weight / height ^ 2).
//
// if bmi <= 18.5 return "Underweight"
//
// if bmi <= 25.0 return "Normal"
//
// if bmi <= 30.0 return "Overweight"
//
// if bmi > 30 return "Obese"

/** Function **/

// function bmi(weight, height) {
//     // variable to determine the body mass index
//     let bodyMassIndex = weight / (height * height);
//     console.log(bodyMassIndex);
//     // if/else statements according to the above values
//     if (bodyMassIndex <= 18.5) {
//         console.log('You need to eat more!');
//         return 'Underweight';
//     } else if (bodyMassIndex <= 25.0) {
//         console.log('Hello Goldilocks :)');
//         return 'Normal';
//     } else if (bodyMassIndex <= 30.0) {
//         console.log('Might be time to go for a run.');
//         return 'Overweight';
//     } else {
//         console.log('Time to cut back on the empty calories.');
//         return 'Obese';
//     }
// }

/** Advanced Solution (Refactored) **/

function bmi(weight, height) {
    return weight / (height * height)  <= 18.5 ? 'Underweight'
        : weight / (height * height)  <= 25.0 ? 'Normal'
            : weight / (height * height)  <= 30.0 ? 'Overweight'
                : 'Obese';
}

/** Test Cases **/

bmi(80, 1.80); // => "Normal"
bmi(94, 1.7); // => "Obese"
