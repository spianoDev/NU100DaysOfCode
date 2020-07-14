// https://www.codewars.com/kata/5bbb8887484fcd36fb0020ca/train/javascript
// Level 7kyu

/** Directions **/

//Count how often sign changes in array.
//
// result
// number from 0 to ... . Empty array returns 0
//
// example
// const arr = [1, -3, -4, 0, 5];
//
// /*
// | elem | count |
// |------|-------|
// |  1   |  0    |
// | -3   |  1    |
// | -4   |  1    |
// |  0   |  2    |
// |  5   |  2    |
// */
//
// catchSignChange(arr) == 2;

/** Function **/

const catchSignChange = arr => {
    // variable to hold the change of sign
    let changeCount = 0;
    // loop through the contents of arr and if the number moves past 0, log the change
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0 && arr[i + 1] >= 0) {
            console.log('stay positive');
        } else if (arr[i] < 0 && arr[i + 1] < 0) {
            console.log('stay negative');
        } else if (arr[i] >= 0 && arr[i + 1] < 0) {
            console.log('changed negative');
            changeCount += 1;
        } else if (arr[i] < 0 && arr[i + 1] >= 0) {
            console.log('changed positive');
            changeCount += 1;
        }
    }
    // return the total count
    console.log(changeCount);
    return changeCount;
};

/** Advanced Solution (Refactored) **/

const catchSignChange = arr => {
    let count = 0;
    let total = arr.forEach((num, index) => (arr[index] < 0 && arr[index + 1] >= 0) ? count++ : (arr[index] >= 0 && arr[index + 1] < 0) ? count++ : count);
    return count;
};

/** Test Cases **/

// catchSignChange([1, 3, 4, 5]); // => 0
// catchSignChange([1, -3, -4, 0, 5]); // => 2
// catchSignChange([]); // => 0
catchSignChange([-47,84,-30,-11,-5,74,77]); // => 3
