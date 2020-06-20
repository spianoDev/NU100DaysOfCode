// https://www.codewars.com/kata/56598d8076ee7a0759000087
// Level 8kyu

/** Directions **/

//Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
//
// You need to consider the following ratings:
//
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
//
// "Rating not recognised" in Javascript, Python and Ruby...
// Because you're a nice person, you always round up the tip, regardless of the service.

/** Function **/

function calculateTip(amount, rating) {
    // need variable to hold the tip
    let tip;
    // use if/else statements to determine the tip percentage
    if (rating.toLowerCase() === 'terrible') {
        console.log(0);
        return 0;
    } else if (rating.toLowerCase() === 'poor') {
        tip = Math.ceil(amount * .05);
        console.log(tip);
        return tip;
    } else if (rating.toLowerCase() === 'good') {
        tip = Math.ceil(amount * .10);
        console.log(tip);
        return tip;
    } else if (rating.toLowerCase() === 'great') {
        tip = Math.ceil(amount * .15);
        console.log(tip);
        return tip;
    } else if (rating.toLowerCase() === 'excellent') {
        tip = Math.ceil(amount * .20);
        console.log(tip);
        return tip;
    } else {
        console.log('Rating not recognised');
        return 'Rating not recognised'
    }
}

/** Advanced Solution (Refactored) **/

function calculateTip(amount, rating) {
    return rating.toLowerCase() === 'excellent' ? Math.ceil(amount * .20)
        : rating.toLowerCase() === 'great' ? Math.ceil(amount * .15)
            : rating.toLowerCase() === 'good' ? Math.ceil(amount * .10)
                : rating.toLowerCase() === 'poor' ? Math.ceil(amount * .05)
                    : rating.toLowerCase() === 'terrible' ? 0
                        : 'Rating not recognised';
}

/** Test Cases **/

calculateTip(20, "Excellent"); // => 4
calculateTip(26.95, "good"); // => 3
calculateTip(100, 'Poor'); // => 5
