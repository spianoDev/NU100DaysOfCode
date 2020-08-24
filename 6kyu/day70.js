// https://www.codewars.com/kata/5c2b4182ac111c05cf388858/train/javascript
// Level 6kyu

/** Directions **/

//Given time in 24-hour format, convert it to words.
//
// For example:
// 13:00 = one o'clock
// 13:09 = nine minutes past one
// 13:15 = quarter past one
// 13:29 = twenty nine minutes past one
// 13:30 = half past one
// 13:31 = twenty nine minutes to two
// 13:45 = quarter to two
// 00:48 = twelve minutes to one
// 00:08 = eight minutes past midnight
// 12:00 = twelve o'clock
// 00:00 = midnight
//
// Note: If minutes == 0, use 'o'clock'. If minutes <= 30, use 'past', and for minutes > 30, use 'to'.

/** Function **/
minuteWords = ["o'clock", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
    "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven",
    "twenty eight", "twenty nine", "half"];
hourWords = ["midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

function solve(time) {
    let hour = time.slice(0,2);
    let minute = time.slice(3);
    let hourWord;
    let minuteWord;
    if (hour > 12) {
        hour -= 12;
        hourWord = hourWords[hour];
    } else {
        hourWord = hourWords[parseInt(hour)];
    }
    if (minute > 30) {
        minute -= 60;
        minuteWord = minuteWords[Math.abs(minute)];
        if (hour === '12') {
            hourWord = hourWords[1];
        } else {
            hourWord = hourWords[parseInt(hour) + 1];
        }
        if (Math.abs(minute) === 1) {
            minuteWord += " minute to";
        } else if (Math.abs(minute) === 15 || Math.abs(minute) === 30) {
            minuteWord += ' to';
        } else if (Math.abs(minute) > 1) {
            minuteWord += " minutes to";
        }
    } else {
        minuteWord = minuteWords[parseInt(minute)];
        if (parseInt(minute) === 1) {
            minuteWord += " minute past";
        } else if (minute === '15' || minute === '30') {
            minuteWord += ' past';
        } else if (parseInt(minute) > 1) {
            minuteWord += " minutes past";
        }
    }
    // console.log(hour, minute, hourWord, minuteWord);
    if (minute === '00' && hour === '00') {
        console.log(hourWord);
        return hourWord;
    }if (minute === '00') {
        console.log(hourWord, minuteWord);
        return hourWord + ' ' + minuteWord;
    } if (time.slice(0,2) === '23' && parseInt(time.slice(3)) > 30) {
        console.log(minuteWord += ' midnight');
        return minuteWord;
    } else {
        console.log(minuteWord, hourWord);
        return minuteWord + ' ' + hourWord;
    }
}

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/

// solve("13:00"); // => "one o'clock"
// solve("13:09"); // => "nine minutes past one"
// solve("13:15"); // => "quarter past one"
// solve("13:29"); // => "twenty nine minutes past one"
// solve("13:30"); // => "half past one"
// solve("13:31"); // => "twenty nine minutes to two"
// solve("13:45"); // => "quarter to two"
// solve("13:59"); // => "one minute to two"
// solve("00:48"); // => "twelve minutes to one"
// solve("00:08"); // => "eight minutes past midnight"
// solve("12:00"); // => "twelve o'clock"
// solve("00:00"); // => "midnight"
// solve("19:01"); // => "one minute past seven"
// solve("07:01"); // => "one minute past seven"
// solve("01:59"); // => "one minute to two"
// solve("12:01"); // => "one minute past twelve"
// solve("00:01"); // => "one minute past midnight"
// solve("11:31"); // => "twenty nine minutes to twelve"
// solve("23:31"); // => "twenty nine minutes to midnight"
// solve("00:01"); // => "one minute past midnight"
// solve("11:45"); // => "quarter to twelve"
// solve("11:59"); // => "one minute to twelve"
// solve("23:45"); // => "quarter to midnight"
// solve("23:59"); // => "one minute to midnight"
// solve("01:45"); // => "quarter to two"
// solve("00:01"); // => "one minute past midnight"
solve("12:31");



