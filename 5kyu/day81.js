// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001
// Level 5kyu

/** Directions **/

//ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9.
// The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.
//
// For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11.
// For example, the ISBN-10: 1112223339 is valid because:
//
// (((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
// Complete the validISBN10() function.
//
// validISBN10('1112223339') ; should return true
// validISBN10('1234554321') ; should return true
// validISBN10('1234512345') ; should return false

/** Function **/

function validISBN10(isbn) {
    if (isbn.length !== 10) {
        return false;
    }
    let nums = [];
    for (let char of isbn) {
        char === 'X' ? nums.push(10) : nums.push(parseInt(char));
    }
    console.log(nums[9]);
    let numSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 10 && i < 9) {
            return false;
        } else {
            numSum += nums[i] * (i + 1);
        }
    }
    console.log(numSum);
    return numSum % 11 === 0;
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// console.log(validISBN10("1112223339")); // => true
// console.log(validISBN10("048665088X")); // => true
// validISBN10("1293000000"); // => true
// validISBN10("1234554321"); // => true
// console.log(validISBN10("1234512345")); // => false
// validISBN10("1293"); // => false
console.log(validISBN10("X123456788")); // => false
// console.log(validISBN10("ABCDEFGHIJ")); // => false
// validISBN10("XXXXXXXXXX"); // => false
