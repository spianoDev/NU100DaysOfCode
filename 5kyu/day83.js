// https://www.codewars.com/kata/5be8e1bb88c754481f000466/train/javascript
// Level 5kyu

/** Directions **/

//When you look at movie ratings, you usually see it as decimal numbers representing average of all viewers' votes.
// While it is very informative, it's not very visually appealing. That's what stars, or in our case- moons, are created for.
//
// Your task is to transform decimal number rating, which is in range 0-10, into 5-moons scale.
// Your final rating should be rounded to "0.5". Input is always valid.
//
// Write function moonRating which returns valid rating represented as moons ('o','c','x') in single string.


/** Function **/

// This is the answer to recommended previous 7kyu exercise

const moons = {'o':'\u{1f315}', 'c': '\u{1f317}', 'x': '\u{1f311}'};
console.log(moons);

// function moonRating(rating) {
//     let conversion = Math.round(rating)/2;
//     let fullMoon = Math.floor(conversion);
//     let halfMoon = conversion % 1;
//     let newMoon = Math.floor(5 - conversion);
//     console.log(conversion, fullMoon, halfMoon, newMoon);
//     if (halfMoon > 0) {
//         halfMoon = 1;
//     }
//     console.log(moons.o.repeat(fullMoon), moons.c.repeat(halfMoon), moons.x.repeat(newMoon));
//     return 'o'.repeat(fullMoon) + 'c'.repeat(halfMoon) + 'x'.repeat(newMoon);
// }

/** Advanced Solution (Refactored) **/

// const moonRating=rating=>{return'o'.repeat(Math.floor(Math.round(rating)/2))+'c'.repeat(Math.ceil((Math.round(rating)/2)%1))+'x'.repeat(Math.floor(5 - Math.round(rating)/2))};

// above answer works, but is too long. Need to assign a variable inside the return statement

function f(v){
    return Math.round(v)/2;
}

const moonRating=r=>{return'o'.repeat(Math.floor(f(r)))+'c'.repeat(Math.ceil((f(r))%1))+'x'.repeat(Math.floor(5 - f(r)))};

// this answer also works, but doesn't pass due to length and the extra function makes it not on one line
/** Test Cases **/

console.log(moonRating(1.5));
