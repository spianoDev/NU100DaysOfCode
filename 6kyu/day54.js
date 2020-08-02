// https://www.codewars.com/kata/5e9df3a0a758c80033cefca1
// Level 6kyu

/** Directions **/

// Imagine if there were no order of operations. Instead, you would do the problem from left to right.
// For example, the equation a+b∗c/da +b *c /da+b∗c/d would become
// (((a+b)∗c)//d)(((a+b)*c)//d)(((a+b)∗c)//d) (Math.floor(((a+b)*c)/d) in JS).
// Return None/null (depending on your language) if the equation is "".
//
// Task:
// Given an equation with a random amount of spaces greater than or equal to zero between each number and operation,
// return the result without order of operations. Note that if two numbers are spaces apart, act as if they were one
// number: 1 3 = 13. However, if given something % 0 or something / 0, return None/null.
// Key:
// ^ represents **
// / should always be rounded down(Math.floor) because the result will always be an integer
// Operations allowed:
// +, -, * , /, ^, %
//
// Example:
// no_order(2 + 3 - 4 * 1 ^ 3) returns 1
//
// because:
//
//   2 + 3 - 4 * 1 ^ 3
// = 2 + 3 - 4 * 1 ^ 3
// = 5 - 4 * 1 ^ 3
// = 1 * 1 ^ 3
// = 1 ^ 3
// = 1

/** Function **/

function noOrder(s) {
    // first remove all the extra spaces from the string
    let noSpaces = s.replace(/\s/g, '');
    console.log(noSpaces);
    // variable to hold all the numbers (as numbers) and operations (as strings)
    let numsAndOperations = [];
    // transform the string numbers into numbers
    for (let char of noSpaces) {
        if (Number.isNaN(parseInt(char))) {
            numsAndOperations.push(char);
        } else {
            numsAndOperations.push(parseInt(char));
        }
    }
    console.log(numsAndOperations);
    // since noSpaces and numsAndOperations are the same length, you can compare the typeof value (string or number)
    // use this to decide if the number should be multiple digits or if the operation should run
    let operators = {
        '+': function(num1, num2) {
            return num1 + num2;
        },
        '-': function(num1, num2) {
            return num1 - num2;
        },
        '*': function(num1, num2) {
            return num1 * num2;
        },
        '/': function(num1, num2) {
            return Math.floor(num1 / num2);
        },
        '%': function(num1, num2) {
            return num1 % num2;
        },
        '^': function(num1, num2) {
            return num1 ** num2;
        }
    };
    // determine the number of digits for the first number
    for (let i = 1; i < numsAndOperations.length; i++) {
        // deal with edge cases of / or % 0 first
        if (numsAndOperations[i] === '/' && numsAndOperations[i + 1] === 0) {
            console.log('The answer is null because of division of zero');
            return null;
        } else if (numsAndOperations[i] === '%' && numsAndOperations[i + 1] === 0) {
            console.log('The answer is null because of modulus of zero');
            return null;
        }
    }
    // edge case of no operations
    if (numsAndOperations.length < 3) {
        if (numsAndOperations.length === 1) {
            console.log('The answer is ' + numsAndOperations[0]);
            return numsAndOperations[0];
        } else {
            let twoDigit = (numsAndOperations[0] * 10) + numsAndOperations[1];
            console.log('the answer is this two digit number ' + twoDigit);
            return twoDigit;
        }
    }
    // final numbers and operations variable
    let finalNumsAndOps = [];
            // make a new loop to calculate the answer
    let calculation = 0;
    if (typeof numsAndOperations[1] === 'string') {
        console.log('first option')
        calculation += numsAndOperations[0];
        finalNumsAndOps.push(calculation, numsAndOperations[1]);
    } else if (typeof numsAndOperations[1] === 'number' && typeof numsAndOperations[2] === 'string') {
        console.log('second option')
        calculation += (numsAndOperations[0] * 10) + numsAndOperations[1];
        finalNumsAndOps.push(calculation, numsAndOperations[2]);
    } else {
        console.log('you found it');
        calculation += (numsAndOperations[0] * 100) + (numsAndOperations[1] * 10) + numsAndOperations[2];
        finalNumsAndOps.push(calculation, numsAndOperations[3]);
    }
    console.log('after finding the first number' +finalNumsAndOps);

    // need to combine multi digit numbers
    for (let i = 2; i < numsAndOperations.length; i++) {
        if (typeof numsAndOperations[i] === 'number' && typeof numsAndOperations[i + 1] === 'number' && typeof numsAndOperations[i + 2] === 'string') {
            let twoDigits = (numsAndOperations[i] * 10) + numsAndOperations[i+1];
            finalNumsAndOps.push(twoDigits, numsAndOperations[i+2]);
            i += 2;
        } else if (typeof numsAndOperations[i] === 'number' && typeof numsAndOperations[i + 1] === 'number' && typeof numsAndOperations[i + 2] === 'undefined') {
            let twoDigits = (numsAndOperations[i] * 10) + numsAndOperations[i+1];
            finalNumsAndOps.push(twoDigits);
            break;
        } else if (typeof numsAndOperations[i] === 'number' && typeof numsAndOperations[i + 1] === 'number' && typeof numsAndOperations[i + 2] === 'number' && typeof numsAndOperations[i + 3] === 'string') {
            let threeDigits = (numsAndOperations[i] * 100) + (numsAndOperations[i + 1] * 10) + numsAndOperations[i + 2];
            finalNumsAndOps.push(threeDigits, numsAndOperations[i + 3]);
            i += 3;
        }else if (typeof numsAndOperations[i] === 'number' && typeof numsAndOperations[i + 1] === 'number' && typeof numsAndOperations[i + 2] === 'number' && typeof numsAndOperations[i + 3] === 'undefined') {
            let threeDigits = (numsAndOperations[i] * 100) + (numsAndOperations[i + 1] * 10) + numsAndOperations[i + 2];
            finalNumsAndOps.push(threeDigits);
            break;
        } else {
            if (numsAndOperations[i] === 0 && typeof numsAndOperations[i + 1] !== 'undefined') {
                finalNumsAndOps.push(numsAndOperations[i], numsAndOperations[i + 1])
                i++;
            } else if (numsAndOperations[i] !== 0 && typeof numsAndOperations[i + 1] !== 'undefined') {
                finalNumsAndOps.push(numsAndOperations[i]);
            } else if (typeof numsAndOperations[i + 1] === 'undefined' && typeof numsAndOperations[i] === 'number') {
                console.log('yes');
                finalNumsAndOps.push(numsAndOperations[i]);
            }
        }
    }
    // delete extra operations
    for (let k= 0; k < finalNumsAndOps.length; k++) {
        if (typeof finalNumsAndOps[k] === 'string' && typeof finalNumsAndOps[k + 1] === 'string') {
            finalNumsAndOps.splice(k, 1);
        }
    }

    console.log(finalNumsAndOps);
    // calculate the answer
    let index = 1;
    while (index < finalNumsAndOps.length) {
        calculation = operators[finalNumsAndOps[index]](calculation, finalNumsAndOps[index+1]);
        index += 2;
    }
    console.log(calculation);

// return the whole number (rounding down)
    console.log(Math.floor(calculation));
    return Math.floor(calculation);
}

/** Advanced Solution (Refactored) **/

// function noOrder(s) {
//   // your code here
// }

/** Test Cases **/

// noOrder("2 + 3- 4*1   ^  3"); // => 1
// noOrder("7 *  3 - 3/  10  0"); // => 0
// noOrder("1 20% 0 + 9"); // => null
// noOrder("6 9* 2+6 /  0"); // => null
// noOrder('5*46+1'); // => 231
noOrder('500+4'); // => 504
// noOrder('75'); // => 75
// noOrder('95+41+90'); // => 226
// noOrder('321-21'); // => 300
// noOrder('56/93*9-52'); // => -52
// noOrder('48-49+26-7*0/55*4-96+41/34/62*71/88/87*78/3+69/20*86-36*39-66*61-59*0*69+64*63'); // => 4032
