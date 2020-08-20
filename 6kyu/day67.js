// https://www.codewars.com/kata/5a622f5f85bef7a9e90009e2/train/javascript
// Level 6kyu

/** Directions **/

//FizzBuzz is often one of the first programming puzzle people learn. Now undo it with reverse FizzBuzz!
//
// Write a function that accepts a string, which will always be a valid section of FizzBuzz.
// Your function must return an array that contains the numbers in order to generate the given section of FizzBuzz.
//
// Notes:
//
// If the sequence can appear multiple times within FizzBuzz, return the numbers that generate the first instance of that sequence.
// All numbers in the sequence will be greater than zero.
// You will never receive an empty sequence.
// Examples
// reverse_fizzbuzz("1 2 Fizz 4 Buzz")        -->  [1, 2, 3, 4, 5]
// reverse_fizzbuzz("Fizz 688 689 FizzBuzz")  -->  [687, 688, 689, 690]
// reverse_fizzbuzz("Fizz Buzz")              -->  [9, 10]

/** Function **/

function reverseFizzBuzz(s) {
    console.log(s);
    let items = s.split(' ');
    let answer = [];
    // edge cases of only words
    if (items.length === 1 && isNaN(items[0])) {
        console.log('do this');
        return (items[0] === 'Fizz') ? [3]
            : (items[0] === 'Buzz') ? [5]
                : [15];
    } else if (items.length === 2 && isNaN(items[0]) && isNaN(items[1])) {
        return (items[0] === 'Buzz') ? [5, 6]
            : [9, 10];
    } else {
        // everything else
        for (let i = 0; i < items.length; i++) {
            let num = parseInt(items[i]);
            if (typeof num === 'number' && isNaN(num)) {
                if (!isNaN(items[i + 1]) && items[i + 1] !== undefined) {
                    console.log('need to subtract 1');
                    answer.push(parseInt(items[i + 1]) - 1);
                } else if (!isNaN(items[i + 2]) && items[i + 2] !== undefined) {
                    console.log('need to subtract 2');
                    answer.push(parseInt(items[i + 2]) - 2);
                } else if (isNaN(items[i + 1]) && items[i + 1] !== undefined) {
                    console.log('add 1');
                    answer.push(parseInt(items[i - 1]) + 1);
                } else if (isNaN(items[i + 1]) && isNaN(items[i + 2]) && items[i + 2] === undefined) {
                    console.log('add 2');
                    answer.push(parseInt(items[i - 2]) + 2);
                }

                else if (isNaN(items[i + 1]) && items[i + 1] === undefined) {
                    console.log('yes')
                    answer.push(parseInt(items[i - 1]) + 1);
                }

                 else {
                    answer.push(parseInt(items[i - 1]) + 1);
                }
            } else if (typeof num === 'number' && !isNaN(num)) {
                answer.push(parseInt(items[i]));
            }
        }
    }
    console.log(answer);
    return answer;
}
// above was the wrong direction, so I'm taking a new approach

function reverseFizzBuzz(s) {
    console.log(s);
    let items = s.split(' ');
    let answer = [];
    // edge cases of only words
    if (items.length === 1 && isNaN(items[0])) {
        console.log('do this');
        return (items[0] === 'Fizz') ? [3]
            : (items[0] === 'Buzz') ? [5]
                : [15];
    } else if (items.length === 2 && isNaN(items[0]) && isNaN(items[1])) {
        return (items[0] === 'Buzz') ? [5, 6]
            : [9, 10];
    } else {
        let sortItems = items.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
        let index = s.split(' ').indexOf(sortItems[0]);
        let num = parseInt(sortItems[0]) - index;
        let count = sortItems.length;
         while(count > 0) {
            answer.push(num);
            num++;
            count--;
        }
        console.log(answer);
         return answer;
    }
}
/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

// reverseFizzBuzz("1 2 Fizz 4 Buzz"); // => [1, 2, 3, 4, 5]
// reverseFizzBuzz("Fizz 688 689 FizzBuzz"); // => [687, 688, 689, 690]
// console.log(reverseFizzBuzz("Fizz Buzz")); // => [9, 10]
// reverseFizzBuzz("Fizz Buzz 11");
// console.log(reverseFizzBuzz('FizzBuzz'));
reverseFizzBuzz('8 Fizz Buzz');



