// https://www.codewars.com/kata/5bf774a81505a7413400006a
// Level 7kyu

/** Directions **/

//In English, all words at the begining of a sentence should begin with a capital letter.
//
// You will be given a paragraph that does not use capital letters. Your job is to capitalise the first letter of the
// first word of each sentence.
//
// For example,
//
// input:
//
// "hello. my name is inigo montoya. you killed my father. prepare to die."
//
// output:
//
// "Hello. My name is inigo montoya. You killed my father. Prepare to die."
//
// You may assume:
//
// there will be no punctuation besides full stops and spaces
//
// all but the last full stop will be followed by a space and at least one word

/** Function **/

function fix(paragraph){
    // need an edge case for empty string
    if (paragraph === '') {
        return '';
    } else {
        // variable to hold answer
        let answer = [];
        // split the paragraph into sentences
        let sentences = paragraph.split('. ');
        console.log(sentences);
        // loop through the sentences and make first letter capital
        for (let word of sentences) {
            console.log(word[0]);
            answer.push(word[0].toUpperCase() + word.slice(1));
        }
        console.log(answer);
        return answer.join('. ');
    }
}

/** Advanced Solution (Refactored) **/

function fix(paragraph){
    return paragraph === '' ? '' : paragraph.split('. ').map((word) => {return word[0].toUpperCase() + word.slice(1)}).join('. ');
}

/** Test Cases **/

fix(""); // => ""
fix("hi."); // => "Hi."
console.log(fix("hello. my name is inigo montoya. you killed my father. prepare to die."));
// => "Hello. My name is inigo montoya. You killed my father. Prepare to die."
