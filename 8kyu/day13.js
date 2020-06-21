// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
// Level 8kyu

/** Directions **/

//Grade book
// Complete the function so that it finds the mean of the three scores passed to it and returns the letter value
// associated with that grade.
//
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.

/** Function **/

// function getGrade (s1, s2, s3) {
//     // Variable for the mean grade
//     let meanGrade = (s1+s2+s3)/3;
//     console.log(meanGrade);
//     // use if/else statements to assign the appropriate grade and return the grade
//     if (meanGrade >= 90) {
//         console.log('A');
//         return 'A';
//     } else if (meanGrade >= 80 && meanGrade < 90) {
//         console.log('B');
//         return 'B';
//     } else if (meanGrade >= 70 && meanGrade < 80) {
//         console.log('C');
//         return 'C';
//     } else if (meanGrade >= 60 && meanGrade < 70) {
//         console.log('D');
//         return 'D';
//     } else {
//         console.log('F');
//         return 'F';
//     }
// }

/** Advanced Solution (Refactored) **/

function getGrade (s1, s2, s3) {
    let meanGrade = (s1+s2+s3)/3;
    return meanGrade >= 90 ? 'A'
            : meanGrade >= 80 && meanGrade < 90 ? 'B'
            : meanGrade >= 70 && meanGrade < 80 ? 'C'
            : meanGrade >= 60 && meanGrade < 70 ? 'D'
            : 'F';
}

/** Test Cases **/

getGrade(95,90,93); // => 'A'
getGrade(70,70,100); // => 'B'
getGrade(75,70,79); // => 'C'
getGrade(58,62,70); // => 'D'
getGrade(48,55,52); // => 'F'
