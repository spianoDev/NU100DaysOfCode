// https://www.codewars.com/kata/526989a41034285187000de4
// Level 5kyu

/** Directions **/

//Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).
//
// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
//
// Examples
// ipsBetween("10.0.0.0", "10.0.0.50")  ===   50
// ipsBetween("10.0.0.0", "10.0.1.0")   ===  256
// ipsBetween("20.0.0.10", "20.0.1.0")  ===  246

/** Function **/

function ipsBetween(start, end){
    let startIP = start.split('.');
    let endIP = end.split('.');
    let firstNum = (parseInt(endIP[0]) - parseInt(startIP[0])) * 16777216;
    let secondNum = (parseInt(endIP[1]) - parseInt(startIP[1])) * 65536;
    let thirdNum = (parseInt(endIP[2]) - parseInt(startIP[2])) * 256;
    let fourthNum = (parseInt(endIP[3]) - parseInt(startIP[3]));
    console.log(firstNum, secondNum, thirdNum, fourthNum);
    let sum = firstNum + secondNum + thirdNum + fourthNum;
    console.log(startIP, endIP, sum);
    return sum;
}

/** Advanced Solution (Refactored) **/

// This one was hard because I needed to find the reference to how IP addresses were calculated. Here is my resource:
//     https://softwareengineering.stackexchange.com/questions/241402/how-can-i-work-out-how-many-ip-addresses-there-are-in-a-given-range
// No refactor today

/** Test Cases **/
// ipsBetween("50.0.0.0","50.1.1.1"); // 65793
// ipsBetween("10.0.0.0", "10.0.0.50"); // => 50
// ipsBetween("20.0.0.10", "20.0.1.0"); // => 246
ipsBetween("170.0.0.0", "170.1.0.0"); // => 65536
// ipsBetween("180.0.0.0", "181.0.0.0"); // => 16777216
// ipsBetween("1.2.3.4", "5.6.7.8"); // => 67372036
