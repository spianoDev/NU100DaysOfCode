// https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
// Level 6kyu

/** Directions **/

// Encrypt this!
//
// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:
//
// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

/** Function **/

function encryptThis(text) {
    // first split the text at each space
    let words = text.split(' ');
    // variable to hold the encoded answer
    let encodedWords = [];
    // loop through the words
    for (let word of words) {
        if (word.length === 1) {
            encodedWords.push(word.charCodeAt(0));
        } else {
       let code = word.replace(word[0], word[0].charCodeAt(0));
       let secondLetter = word.slice(1, 2);
       let nextStep = code.replace(word[1], word[word.length - 1]);
       let lastStep = nextStep.slice(0, code.length-1) + secondLetter;
       console.log(lastStep);
       encodedWords.push(lastStep);
       }
    }
    // return the joined encodedWords separated by a space
    console.log(encodedWords);
    return encodedWords.join(' ');
}

/** Advanced Solution (Refactored) **/
//
// let encryptThis = function(text) {
//     // Implement me! :)
// }

/** Test Cases **/
// encryptThis("A"); // => "65"
// encryptThis('hello'); // => "104olle"
// encryptThis("hello world"); // => "104olle 119drlo"
encryptThis("A wise old owl lived in an oak"); // => "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
// encryptThis("The more he saw the less he spoke"); // => "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
// encryptThis("The less he spoke the more he heard"); // => "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
// encryptThis("Why can we not all be like that wise old bird"); // => "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
// encryptThis("Thank you Piotr for all your help"); // => "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"


