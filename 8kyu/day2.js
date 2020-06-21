// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript
// Level 8kyu

/** Directions **/

// If you can't sleep, just count sheep!!
//
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur:
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

/** Function **/

let countSheep = function (num) {
    //First I need a variable to store the counting sheep strings
    let sheepCount = [];
    // Next, I will create a loop that begins at 1 and goes to the end of num
    for (let i = 1; i <= num; i++) {
        // Inside the loop I will add the current count to the rest of the sheep string
        sheepCount.push(i + " sheep...");
    }
    // Then, I will put all the strings together and return the answer
    console.log(sheepCount); // It is always a good idea to check your work as you go with console.log
    let answer = sheepCount.join('');
    console.log(answer);
    return answer;
};

/** Advanced Solution (Refactored) **/

let countSheep = function (num) {
    let sheepCount = [];
    for (let i = 1; i <= num; i++) {
        sheepCount.push(i + ' sheep...');
    }
    return sheepCount.join('');
};

/** Test Cases **/

// countSheep(1); // => "1 sheep..."
// countSheep(2); // =>  "1 sheep...2 sheep..."
countSheep(3); // => "1 sheep...2 sheep...3 sheep..."


