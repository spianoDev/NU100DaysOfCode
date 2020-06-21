// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
// Level 8kyu

/** Directions **/

//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
//
// For example n = 3 result in "I\n I\n I", or printed:
//
// I
//  I
//   I

/** Function **/

function drawStairs(n) {
    // need a stairs variable to hold the string
    let stairs = [];
    // need a loop to draw the stairs
    for (let i = 0; i < n - 1; i++) {
        // Add 'I' followed by '\n' and the number of spaces that equal the index number
            stairs.push('I\n' + Array(i+1).fill(' ').join(''));
    }
    // add the final 'I'
    stairs.push('I');
    console.log(stairs.join(''));
    // return joined stairs string
    return stairs.join('');
}

/** Advanced Solution (Refactored) **/

function drawStairs(n) {
    let test = [...new Array(n)].map((number, value) => {return (Array(value).fill(' ').join('')) + 'I\n'}).join('');
    return n === 1 ? 'I' : test.substring(0, test.length-1);
}

/** Test Cases **/

// drawStairs(1); // => "I", "The first step has no padding on the left, just an 'I'"
drawStairs(3); // => "I\n I\n  I", "There's something wrong with these 3 steps"
drawStairs(5); // => "I\n I\n  I\n   I\n    I", "5-step stairs no good"

