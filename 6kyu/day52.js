// https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/javascript
// Level 6kyu

/** Directions **/

//John has invited some friends. His list is:
//
// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that
//
// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result
// between parentheses separated by a comma.
//
// So the result of function meeting(s) will be:
//
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

/** Function **/

function meeting(s) {
    // separate the string by ;
    let names = s.split(';');
    // console.log(names);
    let namesToSort = [];
    // put the string into an object with first name and last name
    for (let name of names) {
        namesToSort.push(name.toUpperCase().split(':'));
    }
    // if the last name is the same, need to make sure the first name is sorted correctly
   // let lastNameSort = namesToSort.sort((a,b) => b[1] > a[1] ? -1 : b[0] > a[0] ? 0: 1);
    // these two return the same thing and neither are sorting the first name correctly.
    let lastNameSort = namesToSort.sort((a,b) => b[1] > a[1] ? -1 : 0);

    // now we need to put this sorted list into a new string format...
    let meetingString = '';
    for (let person of lastNameSort) {
        meetingString += '(' + person[1] + ', ' + person[0] + ')';
    }
    // return the meetingString
    console.log(meetingString);
    return meetingString;
}

/** Advanced Solution (Refactored) **/

// function meeting(s) {
//     // your code
// }

/** Test Cases **/

// meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn");
// => "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"
// meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell");
// => "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)"
// meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern");
// => "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)"
meeting("Anna:Wahl;Grace:Gates;James:Russell;Elizabeth:Rudd;Victoria:STAN;Jacob:Wahl;Alex:Wahl;Antony:Gates;Alissa:Meta;Megan:Bell;Amandy:Stan;Anna:Steve");
// => "(BELL, MEGAN)(GATES, ANTONY)(GATES, GRACE)(META, ALISSA)(RUDD, ELIZABETH)(RUSSELL, JAMES)(STAN, AMANDY)(STAN, VICTORIA)(STEVE, ANNA)(WAHL, ALEX)(WAHL, ANNA)(WAHL, JACOB)"


