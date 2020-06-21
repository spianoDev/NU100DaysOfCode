// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
// Level 8kyu

/** Directions **/

//Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers
// from min to max, with the step.
// The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)

/** Function **/

function generateRange(min, max, step){
    // need a variable for the final array
    let rangeArr = [];
    // loop between the min and max by step, adding the values to the final array
    for (let i = min; i <= max; i += step) {
        rangeArr.push(i);
    }
    // return the final array
    console.log(rangeArr);
    return rangeArr;
}

/** Advanced Solution (Refactored) **/

function generateRange(min, max, step){
    let test = [...new Array(max)].map((max, value) => {return min + (value * step)}).slice(0, (max-min)/step + 1);
    console.log(test)
}

/** Test Cases **/

generateRange(2, 10, 2); // => [2,4,6,8,10]
generateRange(1, 10, 3); // => [1, 4, 7, 10]
generateRange(1, 10, 4); // => [1, 5, 9]
generateRange(18, 61, 6); // => [18, 24, 30, 36, 42, 48, 54, 60]
