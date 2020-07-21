// https://www.codewars.com/kata/580a4001d6df740d61000301
// Level 7kyu

/** Directions **/

//You are given an array of non-negative integers, your task is to complete the series from 0 to the highest number in the array.
//
// If the numbers in the sequence provided are not in order you should order them, but if a value repeats, then you must return a
// sequence with only one item, and the value of that item must be 0. like this:
//
// inputs        outputs
// [2,1]     ->  [0,1,2]
// [1,4,4,6] ->  [0]
// Notes: all numbers are positive integers.
//
// This is set of example outputs based on the input sequence.
//
// inputs        outputs
// [0,1]   ->    [0,1]
// [1,4,6] ->    [0,1,2,3,4,5,6]
// [3,4,5] ->    [0,1,2,3,4,5]
// [0,1,0] ->    [0]

/** Function **/

function completeSeries(arr) {
    // variable for the answer
    let answer = [];
    // first sort the arr
    let orderedArr = arr.sort((a, b) => b - a);
    console.log(orderedArr);
    // loop through the contents of orderedArr
    for (let i = 0; i < orderedArr.length; i++) {
        // if two numbers are the same, return [0]
        if (orderedArr[i] === orderedArr[i + 1]) {
            console.log('there are duplicates');
            return [0];
        }
    }
    // otherwise populate the answer with values from 0 through the first number in the sorted array
    for (let j = 0; j <= orderedArr[0]; j++) {
        answer.push(j);
    }
    // return the answer
    console.log(answer);
    return answer;
}

/** Advanced Solution (Refactored) **/

function completeSeries(arr) {
    if (arr.some((num, idx) => arr.indexOf(num) !== idx)) {
        return [0];
    } else {
        return [...Array(arr.sort((a, b) => b - a)[0] + 1).keys()];
    }
}

/** Test Cases **/

completeSeries([0, 1]); // => [0,1]
// completeSeries([1,4,6]); // => [0,1,2,3,4,5,6]
// completeSeries([3,4,5]); // => [0,1,2,3,4,5]
// completeSeries([2,1]); // => [0,1,2]
// completeSeries([1,4,4,6]); // => [0]
completeSeries([1, 5, 2, 3, 9]);

