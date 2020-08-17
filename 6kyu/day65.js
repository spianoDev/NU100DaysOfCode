// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
// Level 6kyu

/** Directions **/

// Build Tower
// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
//
// Tower block is represented as *
//
// JavaScript: returns an Array;

// for example, a tower of 3 floors looks like below
//
// [
//   '  *  ',
//   ' *** ',
//   '*****'
// ]
// and a tower of 6 floors looks like below
//
// [
//   '     *     ',
//   '    ***    ',
//   '   *****   ',
//   '  *******  ',
//   ' ********* ',
//   '***********'
// ]

/** Function **/

function towerBuilder(nFloors) {
    let tower = [];
    let char = '*';
    let space = ' ';
    let addSpaces = nFloors-1;
    for (let i = 0; i < nFloors; i++) {
            tower.push(space.repeat(addSpaces)+char+char.repeat(i)+char.repeat(i)+space.repeat(addSpaces));
            addSpaces--;
    }
    console.log(tower);
    return tower;
}

/** Advanced Solution (Refactored) **/

// no refactor today

/** Test Cases **/

towerBuilder(1); // => ["*"]
towerBuilder(2); // => [" * ","***"]
towerBuilder(3); // => ["  *  "," *** ","*****"]

