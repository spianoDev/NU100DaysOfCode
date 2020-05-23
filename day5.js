// https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
// Level 8kyu

/** Directions **/

// The function is not returning the correct values. Can you figure out why?

// The original function:
// function getPlanetName(id){
//     var name;
//     switch(id){
//         case 1:
//             name = 'Mercury'
//         case 2:
//             name = 'Venus'
//         case 3:
//             name = 'Earth'
//         case 4:
//             name = 'Mars'
//         case 5:
//             name = 'Jupiter'
//         case 6:
//             name = 'Saturn'
//         case 7:
//             name = 'Uranus'
//         case 8:
//             name = 'Neptune'
//     }
//     return name;
// }

/** Function **/

function getPlanetName(id){
    let name;
    // My text editor has some things highlighted which alerts me that something is wrong.
    // I'm going to start by looking up the syntax for case/switch.
    // https://www.w3schools.com/js/js_switch.asp
    // Looks like each case is missing the break
    switch(id){
        case 1:
            name = 'Mercury';
            // insert break after each code block
            break;
        case 2:
            name = 'Venus';
            break;
        case 3:
            name = 'Earth';
            break;
        case 4:
            name = 'Mars';
            break;
        case 5:
            name = 'Jupiter';
            break;
        case 6:
            name = 'Saturn';
            break;
        case 7:
            name = 'Uranus';
            break;
        case 8:
            name = 'Neptune';
    }
// now when the code runs it stops at the case that matches instead of running to the end of the cases.
    return name;
}

/** Advanced Solution (Refactored) **/

//Another way to do something like this is to make an array of objects with each id and planet as key/value pairs

let planets = [
    {"id": 1, "planet": 'Mercury'},
    {"id": 2, "planet": 'Venus'},
    {"id": 3, "planet": 'Earth'},
    {"id": 4, "planet": 'Mars'},
    {"id": 5, "planet": 'Jupiter'},
    {"id": 6, "planet": 'Saturn'},
    {"id": 7, "planet": 'Uranus'},
    {"id": 8, "planet": 'Neptune'}
];

function getPlanetName(id){
    for (let i = 0; i < planets.length; i++) {
        if (planets[i].id === id) {
            return planets[i].planet;
        }
    }
}

/** Test Cases **/

console.log(getPlanetName(2)); // => 'Venus'
console.log(getPlanetName(5)); // => 'Jupiter'
console.log(getPlanetName(3)); // => 'Earth'



