// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/train/javascript
// Level 7kyu

/** Directions **/

//It's been a tough week at work and you are struggling to get out of bed in the morning.
//
// While waiting at the bus stop you realise that if you could time your arrival to the nearest
// minute you could get valuable extra minutes in bed.
//
// There is a bus that goes to your office every 15 minute, the first bus is at 06:00, and the
// last bus is at 00:00.
//
// Given that it takes 5 minutes to walk from your front door to the bus stop,
// implement a function that when given the current time will tell you much time is left,
// before you must leave to catch the next bus.
//
// Examples
// "05:00"  =>  55
// "10:00"  =>  10
// "12:10"  =>  0
// "12:11"  =>  14
// Notes
// Return the number of minutes till the next bus
// Input will be formatted as HH:MM (24-hour clock)
// The input time might be after the buses have stopped running, i.e. after 00:00

/** Function **/

function busTimer(time) {
    // variables for hour and minute
    let hour = parseInt(time.slice(0, 2));
    let minute = parseInt(time.slice(3));
    console.log(hour, minute);
    let extraMinutes = 0;
    // if the hour is less than 5, return the extra minutes
    if (hour < 5) {
        extraMinutes = (5 - hour) * 60 + (60 - minute) - 5;
        console.log(extraMinutes);
        return extraMinutes;
    } // if the hour is 5 calculate the extra minutes to add to the answer
    else if (hour === 5 && minute <= 45) {
        // if (minute > 10) {
            extraMinutes = 55 - minute;
            console.log(extraMinutes);
            return extraMinutes;
    } // if the hour is after 11:40 calculate the minutes until the next 6 am bus
    else if (hour === 23 && minute >= 56) {
        extraMinutes = 415 - minute;
        console.log(extraMinutes);
        return extraMinutes;
    } else {
        // new variable that adds the extra minutes (default is 0)
        let answer = (10 - minute % 15);
        if (answer >= 0) {
            console.log(answer);
            return answer;
        } else {
            // if the answer is a negative number, add 15 to it
            answer += 15;
            console.log(answer);
            return answer;
        }
    }
}

/** Advanced Solution (Refactored) **/

// I struggled with the math part of this one so no refactor

/** Test Cases **/

// busTimer("10:00"); // => 10
// busTimer("15:05"); // => 5
// busTimer("06:10"); // => 0
// busTimer("07:56"); // => 14
// busTimer("09:26");
// busTimer("12:11");
// busTimer("03:02");
// busTimer("05:19");
// busTimer("06:25");
busTimer("23:57"); // => 358
busTimer("05:46");
