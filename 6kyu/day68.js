// https://www.codewars.com/kata/52840d2b27e9c932ff0016ae/train/javascript
// Level 6kyu

/** Directions **/

//Write a function that gets a sequence and value and returns true/false depending on whether the variable exists in a
// multidimentional sequence.
//
// Example:
//
// locate(['a','b',['c','d',['e']]],'e'); // should return true
// locate(['a','b',['c','d',['e']]],'a'); // should return true
// locate(['a','b',['c','d',['e']]],'f'); // should return false

/** Function **/
function flatten(arr){
    let flattenedArr = [];
    for (let item of arr) {
        (Array.isArray(item)) ? flattenedArr = flattenedArr.concat(flatten(item)): flattenedArr.push(item);
    }
    return flattenedArr;
}
console.log(flatten(['a','b',['c','d',['e']]]));
function locate(arr,value){
    let newArr = flatten(arr);
    for (let val of newArr) {
        if (val === value) {
            return true;
        }
    }
    return false;
}

/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

// console.log(locate(['a','b',['c','d',['e']]],'e')); // should return true
// console.log(locate(['a','b',['c','d',['e']]],'a')); // should return true
console.log(locate(['a','b',['c','d',['e']]],'f')); // should return false



