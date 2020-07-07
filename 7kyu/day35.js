// https://www.codewars.com/kata/5296455e4fe0cdf2e000059f/train/javascript
// Level 7kyu

/** Directions **/

//Write a function called calculate that takes 3 values. The first and third values are numbers. The second value is a character.
// If the character is "+" , "-", "*", or "/", the function will return the result of the corresponding mathematical function on the two numbers.
// If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).
//
// calculate(2,"+", 4); //Should return 6
// calculate(6,"-", 1.5); //Should return 4.5
// calculate(-4,"*", 8); //Should return -32
// calculate(49,"/", -7); //Should return -7
// calculate(8,"m", 2); //Should return null
// calculate(4,"/",0) //should return null
// Keep in mind, you cannot divide by zero. If an attempt to divide by zero is made, return null (throw an ArgumentException in C#).

/** Function **/

function calculate(num1, operation, num2) {
    // object to hold the
    let calculations = {
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2
    };
    // return operation with some conditionals for 0 and Infinity/undefined cases
    console.log(calculations[operation]);
    return calculations[operation] === -0 ? 0
        : calculations[operation] === Infinity ? null
            : calculations[operation] === -Infinity ? null
                : calculations[operation] === undefined ? null
                    : calculations[operation];
}

/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

calculate(3.2,"+", 8); // => 11.2, "3.2 + 8 = 11.2"
calculate(3.2,"-", 8); // => -4.8, "3.2 - 8 = -4.8"
calculate(3.2,"/", 8); // => 0.4, "3.2 / 8 = .4"
calculate(3.2,"*", 8); // => 25.6, "3.2 * 8 = 25.6"
calculate(-3,"+", 0); // => -3, "-3 + 0 = -3"
calculate(-3,"-", 0); // => -3, "-3 - 0 = -3"
calculate(-3,"/", 0); // => null, "-3 / 0 = null"
calculate(-3,"*", 0); // => 0, "-3 * 0 = 0"
calculate(-3,"w", 0); // => null, "-3 w 0 = null"
