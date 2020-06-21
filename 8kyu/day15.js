// https://www.codewars.com/kata/57e921d8b36340f1fd000059/train/javascript
// Level 8kyu

/** Directions **/

//Your friend invites you out to a cool floating pontoon around 1km off the beach.
// Among other things, the pontoon has a huge slide that drops you out right into the ocean,
// a small way from a set of stairs used to climb out.
//
// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
//
// You need to work out if the shark will get to you before you can get to the pontoon.
// To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead,
// or swim when you realise you can make it!
//
// You are given 5 variables: sharkDistance = distance the shark needs to cover to eat you in metres,
// sharkSpeed = how fast it can move in metres/second,
// pontoonDistance = how far you need to swim to safety in metres,
// youSpeed = how fast you can swim in metres/second,
// dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
//
// If you make it, return "Alive!", if not, return "Shark Bait!".

/** Function **/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    // need a variable for person time to pontoon
    let personToPontoon = pontoonDistance / youSpeed;
    console.log('The person needs to swim ' +personToPontoon);
    let sharkToPerson;
    // need a variable for shark time to pontoon if dolphin = true
    if (dolphin) {
        sharkToPerson = sharkDistance / (sharkSpeed / 2)
    } else {
        // need a variable for shark time to pontoon if dolphin = false
        sharkToPerson = sharkDistance / sharkSpeed;
    }
    console.log('The shark will reach the person in ' +sharkToPerson);
    // if personToPontoon less than sharkToPerson, return 'Alive!'
    if (personToPontoon < sharkToPerson) {
        console.log('Alive!');
        return 'Alive!';
    } else if (personToPontoon >= sharkToPerson) {
    // if personToPontoon greater than or equal to sharkToPerson, return 'Shark Bait!'
        console.log('Shark Bait!');
        return 'Shark Bait!';
    }
}

/** Advanced Solution (Refactored) **/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    return (pontoonDistance / youSpeed) < (sharkDistance / sharkSpeed) && !dolphin ? 'Alive!'
        : (pontoonDistance / youSpeed) < (sharkDistance / (sharkSpeed / 2)) && dolphin ? 'Alive!'
            : (pontoonDistance / youSpeed) >= (sharkDistance / sharkSpeed) && !dolphin ? 'Shark Bait!'
            : (pontoonDistance / youSpeed) >= (sharkDistance / (sharkSpeed / 2)) && dolphin ? 'Shark Bait!'
                    : 'not possible answer';
}

/** Test Cases **/

// shark(12, 50, 4, 8, true); // => "Alive!"
// shark(7, 55, 4, 16, true); // => "Alive!"
// shark(24, 0, 4, 8, true); // => "Shark Bait!")
console.log(shark( 31, 118, 3, 15, false));
