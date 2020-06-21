// https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/javascript
// Level 8kyu

/** Directions **/

//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with
// a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry..
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons,
// will he survive?
//
// Return True if yes, False otherwise :)

/** Function **/

function hero(bullets, dragons){
    // need a variable to hold the bullet to dragon ratio
    let dragonslayer = bullets / 2;
    // if dragonslayer is greater than or equal to the number of dragons, the hero lives!
    if (dragonslayer >= dragons) {
        console.log('Our hero lives!');
        return true;
    } else {
    // otherwise, he dies...
        console.log('Alas, our brave hero has died...');
        return false;
    }
}

/** Advanced Solution (Refactored) **/

function hero(bullets, dragons){
    return bullets/2 >= dragons;
}
/** Test Cases **/

hero(10, 5); // => true
hero(7, 4); // => false
hero(4, 5); // => false
hero(100, 40); // => true
hero(1500, 751); // => false
hero(0, 1); // => false
