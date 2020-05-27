// https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
// Level 8kyu

/** Directions **/

//At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.
//
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0.
// Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].

/** Function **/

function differenceInAges(ages){
    // variable to hold the return array
    let familyData = [];
    // sort the ages array
    let sortedAges = ages.sort((a, b) => a - b);
    console.log(sortedAges);
        // find the smallest and add it to the familyData array
    familyData.push(sortedAges[0]);
        // find the largest and add it to the familyData array
    familyData.push(sortedAges[ages.length-1]);
    // subtract the largest and smallest values and add difference to return familyData
    let difference = familyData[1] - familyData[0];
    familyData.push(difference);
    // return the answer
    console.log(familyData);
    return familyData;
}

/** Advanced Solution (Refactored) **/

function differenceInAges(ages){
    return [Math.min(...ages), Math.max(...ages), (Math.max(...ages) - Math.min(...ages))];
}

/** Test Cases **/

differenceInAges([82, 15, 6, 38, 35]); // => [6, 82, 76]
// differenceInAges([57, 99, 14, 32]); // => [14, 99, 85]
// differenceInAges([ 28, 46, 33, 29, 4, 1, 12, 47, 78, 86, 87, 92 ]); // => [1, 92, 91]
