// https://www.codewars.com/kata/59f7fc109f0e86d705000043
// Level 7kyu

/** Directions **/

//A trick I learned in elementary school to determine whether or not a number was divisible by three is to add all of the
// integers in the number together and to divide the resulting sum by three. If there is no remainder from dividing the sum by three,
// then the original number is divisible by three as well.
//
// Given a series of numbers as a string, determine if the number represented by the string is divisible by three.
//
// You can expect all test case arguments to be strings representing values greater than 0.
//
// Example:
//
// "123"      -> true
// "8409"     -> true
// "100853"   -> false
// "33333333" -> true
// "7"        -> false

/** Function **/

function divisibleByThree(str){
    // split the string into individual characters and convert to numbers
    let nums = str.split('');
    console.log(nums);
    // variable to hold the sum
    let sum = 0;
    // add all the numbers together and use the modulus to determine if there is a remainder
    for (let number of nums) {
        sum += parseInt(number);
    }
    console.log(sum);
    // return true if no and false if yes.
    if (sum % 3 === 0) {
        console.log('Divisible by 3!');
        return true;
    } else {
        console.log('Remainder found, sorry.');
        return false;
    }
}

/** Advanced Solution (Refactored) **/
// I was close in my answer, but was trying to return the callback function instead of going through from the first
// index (I only successfully submitted the naive solution)

function divisibleByThree(str){
    return str.split('').reduce((total, num) => Number(total) + Number(num), 0) % 3 === 0;
}

/** Test Cases **/

console.log(divisibleByThree('123')); // => true, "Should return true if the sum of the given digits is divisible by 3."
console.log(divisibleByThree('19254')); // => true, "Should return true if the sum of the given digits is divisible
// by 3."
console.log(divisibleByThree('88')); // => false, "Should return false if the sum of the given digits is not divisible
// by 3."
console.log(divisibleByThree('1')); // => false, "Should return false if the sum of the given digits is not divisible
// by 3."


