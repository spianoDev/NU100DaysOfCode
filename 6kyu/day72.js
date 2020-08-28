// https://www.codewars.com/kata/5e7e4b7cd889f7001728fd4a/train/javascript
// Level 6kyu

/** Directions **/

//The task is simple - given a 2D array (list), generate an HTML table representing the data from this array.
//
// You need to write a function called to_table/toTable, that takes three arguments:
//
// data - a 2D array (list),
// headers - an optional boolean value. If True, the first row of the array is considered a header (see below). Defaults to False,
// index - an optional boolean value. If True, the first column in the table should contain 1-based indices of the corresponding row.
// If headers arguments is True, this column should have an empty header. Defaults to False.
// and returns a string containing HTML tags representing the table.
// Details
// HTML table is structured like this:
// <table>
//   <thead>                 <!-- an optional table header -->
//     <tr>                  <!-- a header row -->
//       <th>header1</th>    <!-- a single header cell -->
//       <th>header2</th>
//     </tr>
//   </thead>
//   <tbody>                 <!-- a table's body -->
//     <tr>                  <!-- a table's row -->
//       <td>row1, col1</td> <!-- a row's cell -->
//       <td>row1, col2</td>
//     </tr>
//     <tr>
//       <td>row2, col1</td>
//       <td>row2, col2</td>
//     </tr>
//   </tbody>
// </table>
// The table header is optional. If header argument is False then the table starts with <tbody> tag, ommiting <thead>.
//
// So, for example:
//
// toTable([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true)
// returns
//
// "<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"
// As you can see, no linebreaks or whitespaces (except for the ones present in the array values) are included, so the HTML code is minified.
//
// IMPORTANT NOTE: if the value in the array happens to be None, the value of the according cell in the table should be en ampty string ("")!
// Otherwise, just use a string representation of the given value, so, dependent on the language, the output can be slightly different.
// No additional parsing is needed on the data.
//
// Additional info
// For your convenience, there is a preloaded function esc_html/escHtml that takes a string with HTML tags and escape them;
// it is necessary if you want to use print/console.log on your resulting strings, elsewise Codewars processes HTML tags,
// so they appear invisible in the stdout.
//
// Test cases will always provide valid data, that is - up to three arguments, first a NxM array (list) with N and M > 0,
// second and third a boolean. The values in the array will always be either string, number, bool or None/null.

/** Function **/

function toTable(data, headers=false, index=false) {
    console.log(data);
    let tableFront = ['<table>'];
    let tableHeader = ['<thead>'];
    let tableBody = ['<tbody>'];
    let tableEnd = ['</table>'];
    console.log(headers, index);
    if (headers) {
        tableHeader.push('<tr>', '<th></th>');
        for (let val of data[0]) {
            tableHeader.push('<th>', val, '</th>');
        }
        tableHeader.push('</tr></thead>');
    }

    if (index) {
        let idx = 1;
        while (idx < data.length) {
            tableBody.push('<tr>');
            tableBody.push('<td>', idx.toString(), '</td>');

            if (headers) {
                for (let val of data[idx]) {
                    tableBody.push('<td>', val, '</td>');
                }
                tableBody.push('</tr>');

            } else {
                for (let val of data[idx - 1]) {
                    tableBody.push('<td>', val, '</td>');
                }
                tableBody.push('</tr>');
            }
            idx++;
        }
        if (!headers) {
            tableBody.push('<tr>');
            tableBody.push('<td>', idx.toString(), '</td>');
            for (let val of data[idx - 1]) {
                tableBody.push('<td>', val, '</td>');
            }
            tableBody.push('</tr>');
        }
    }
    let dataIdx = 0;
    if (!index) {
        tableBody.push('<tr>');
        while (dataIdx < data.length) {
            for (let val of data[dataIdx]) {
                tableBody.push('<td>', val, '</td>');
            }
            tableBody.push('</tr>');
            dataIdx++;
        }
    }
    tableBody.push('</tbody>');

    console.log(tableFront, tableHeader, tableBody, tableEnd);
    if (tableHeader.length > 1) {
        return tableFront.join('') + tableHeader.join('') + tableBody.join('') + tableEnd.join('');
    } else {
        return tableFront.join('') + tableBody.join('') + tableEnd.join('');
    }
}

/** Advanced Solution (Refactored) **/

// I'm having trouble interpreting the instructions since the test cases seem to have different conditions with
// regards to the headers (some have empty first column and others do not). Without clarification, I'm calling it
// quits for now.

/** Test Cases **/

// toTable([["o"]]); // => "<table><tbody><tr><td>o</td></tr></tbody></table>"
// toTable([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true);
// => "<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"
// toTable([[1, 2, 3], [4, 5, 6], [7, 8, 9]], false, true);
// => "<table><tbody><tr><td>1</td><td>1</td><td>2</td><td>3</td></tr><tr><td>2</td><td>4</td><td>5</td><td>6</td></tr><tr><td>3</td><td>7</td><td>8</td><td>9</td></tr></tbody></table>"
toTable([["a", "b", "c", "d", "e"], [true, false, false, true, true]], true);
// => "<table><thead><tr><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th></tr></thead><tbody><tr><td>true</td><td>false</td><td>false</td><td>true</td><td>true</td></tr></tbody></table>"













