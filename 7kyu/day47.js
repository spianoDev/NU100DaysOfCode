// https://www.codewars.com/kata/5bce125d3bb2adff0d000245/train/javascript
// Level 7kyu

/** Directions **/

//You are given a sequence of a journey in London, UK. The sequence will contain bus numbers and TFL tube names as strings e.g.
//
// ['Northern', 'Central', 243, 1, 'Victoria']
// Journeys will always only contain a combination of tube names and bus numbers. Each tube journey costs £2.40 and each
// bus journey costs £1.50. If there are 2 or more adjacent bus journeys, the bus fare is capped for sets of two adjacent
// buses and calculated as one bus fare for each set.
//
// Your task is to calculate the total cost of the journey and return the cost rounded to 2 decimal places in the format
// (where x is a number): £x.xx

/** Function **/

function londonCityHacker(journey) {
    // variable to hold the total fare and keep track of the bus count
    let fare = 0;
    let count = 2;
    //loop through journey array adding appropriate fare
    for (let ride of journey) {
        if (typeof ride === "number") {
            // use count to determine the fare if 2 adjacent bus routes exist
            if (count > 0) {
                fare += 1.5;
                count--;
                if (count === 0) {
                    fare -= 1.5;
                    count = 2;
                }
            }
        } else if (typeof ride === "string") {
            fare += 2.4;
            count = 2;
        }
    }
    // return fare as formatted string
    let answer = '£' + fare.toFixed(2).toString();
    console.log(answer);
    return answer;
}

/** Advanced Solution (Refactored) **/

// It took me a little time to understand the directions so no refactor today

/** Test Cases **/

londonCityHacker([12, 'Central', 'Circle', 21]); // => "£7.80"
// londonCityHacker(['Piccidilly', 56]); // => "£3.90"
// londonCityHacker(['Northern', 'Central', 'Circle']); // => "£7.20"
// londonCityHacker(['Piccidilly', 56, 93, 243]); // => "£5.40"
londonCityHacker([386, 56, 1, 876]); // => "£3.00"
// londonCityHacker([]); // => "£0.00"
londonCityHacker([3, 4, 2, 7, 'Central', 5]);
londonCityHacker([4, 2]);
