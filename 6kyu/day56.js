// https://www.codewars.com/kata/59f38b033640ce9fc700015b/train/javascript
// Level 6kyu

/** Directions **/

// In this Kata, you will be given an integer array and your task is to return the sum of elements occupying
// prime-numbered indices.
//
// The first element of the array is at index 0.

/** Function **/

function total(arr){
    // need a function to find prime numbers
    let primes = [];
    function primeFinder(number) {
        let allNums = [];
        for (let i = 2; i <= number; i++) {
            if (!allNums[i]) {
                primes.push(i);
                for (let j = i << 1; j <= number; j += i)
                {
                    allNums[j] = true;
                }
            }
        }
        // console.log(primes);
        return primes;
    }

    // find the primes from 2 through the length of arr
    primeFinder(arr.length);
    console.log(primes);
    // variable holding the index value of primes
    let index = 0;
    // variable holding the sum
    let sum = 0;
    // eliminate edge cases of arr.length < 3
    if (arr.length < 3) {
        console.log('sum is zero');
        return sum;
    }
    // loop through the values of the arr and add only indices that equal the prime numbers
    for (let i = 2; i < arr.length; i++) {
        if (i === primes[index]) {
            sum += arr[i];
            index++;
        }
    }
    console.log(sum);
    return sum;
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/
// total([]); // => 0
// total([1,2,3,4]); // => 7
// total([1,2,3,4,5,6]); // => 13
// total([1,2,3,4,5,6,7,8]); // => 21
total([1,2,3,4,5,6,7,8,9,10,11]); // => 21
// total([1,2,3,4,5,6,7,8,9,10,11,12,13]); // => 33
// total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]); // => 47


