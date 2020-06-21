// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/train/javascript
// Level 8kyu

/** Directions **/

//Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.
//
// Example:
//
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
// None of the arrays will be empty, so you don't have to worry about that!

/** Function **/

function removeEveryOther(arr){
    // need a variable to hold the new array
    let evenArr = [];
    // loop through the original array and put all even indexed items into the new array
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }
    // return the new array
    console.log(evenArr);
    return evenArr;
}

/** Advanced Solution (Refactored) **/

function removeEveryOther(arr){
    return arr.filter((item, index) => {return index % 2 === 0});
}

/** Test Cases **/

// removeEveryOther(['Hello', 'Goodbye', 'Hello Again']); // => ['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // => [1, 3, 5, 7, 9]
// removeEveryOther([[1, 2]]); // => [[1, 2]]
// removeEveryOther([['Goodbye'], {'Great': 'Job'}]); // => [['Goodbye']]
