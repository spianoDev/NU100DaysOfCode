// https://www.codewars.com/kata/53573877d5493b4d6e00050c
// Level 7kyu

/** Directions **/

//Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.
//
// The method should return an array of sentences declaring the state or country and its capital.
//
// Examples
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
// capital(state_capitals)[0] // returns "The capital of Maine is Augusta"
//
// country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
// capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"
//
// mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
// capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"

/** Function **/


function capital(capitals){
    // variable to hold the answer (must be an array)
    let capitalString = [];
    // find the value of the pairs by looping through the key/value pairs
    for (let values of capitals) {
        // adding the values for state
        if (values.state !== undefined) {
            capitalString.push('The capital of ' + values.state + ' is ' + values.capital);
        } else if (values.country !== undefined) {
            // adding the values for country
            capitalString.push('The capital of ' + values.country + ' is ' + values.capital);
        }
    }
    console.log(capitalString);
    return capitalString;
}

/** Advanced Solution (Refactored) **/
// the condensed version of above
function capital(capitals){
    let capStr = [];
    for (let val of capitals) {
        capStr.push('The capital of ' + (val.state || val.country) + ' is ' + val.capital);
    }
    return capStr;
}

// another option is:
function capital(capitals) {
    return capitals.map((val) => {return 'The capital of ' + (val.state || val.country) + ' is ' + val.capital})
}

/** Test Cases **/

capital([{state: 'Maine', capital: 'Augusta'}]); // => "The capital of Maine is Augusta"
// capital([{'country' : 'Spain', 'capital' : 'Madrid'}]); // => "The capital of Spain is Madrid"
// capital([{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]); // => "The capital of Spain is Madrid"

