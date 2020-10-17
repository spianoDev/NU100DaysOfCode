// https://www.codewars.com/kata/587a45b954a6780e37000176
// Level 5kyu

/** Directions **/

//An integer array nums that contains n*2 elements:
//
// [1,2,3,4,5,6]
//
// Output
// A 2D array that contains n elements. Each element is an subarray that contains two integers, and their sum must be a prime:
//
// [[1,2],[3,4],[5,6]]
//
// Note:
// You can assume that the length of nums always be an even number or 0(an empty array) and it always less than 20.
// All the integers are positive integers and less than or equals to 1000.
// You don't need to worry about the order of the output array. that is, There may be many kinds of combinations and sequences,
// you just need to return one of the effective combinations.
// If there is no possible solution, return []


/** Function **/
function test_prime(n) {
    if (n < 2) {
        console.log('no it is one');
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log('nope');
            return false;
        }
    }
    console.log('yup');
    return true;
}
// test_prime(2);
// test_prime(6);
// test_prime(1)

function primeSumPair(nums){
    // nums.sort((a,b)=> a-b);
    let answer = [];
    let pointer = nums.length - 2;

    for (let j = nums.length - 1; j >= 0; j-=2) {
        let sum = nums[j] + nums[pointer];

            if (test_prime(sum)) {
                answer.push([nums[pointer], nums[j]]);
                nums.pop();
                nums.pop();
                pointer -= 2;
            } else {
                while (pointer > 0) {
                pointer -= 1;
                console.log(pointer);
            }
        }
    }
    console.log(answer.sort());
    return answer.sort();
}

/** Advanced Solution (Refactored) **/


// no refactor today

/** Test Cases **/

// primeSumPair([1,2,3,4,5,6]); // => can return: [[1,2],[3,4],[5,6]]
// or: [[3,4],[5,6],[1,2]]
// or: [[1,4],[5,6],[2,3]]

// primeSumPair([11,22,33,44,55,66]); // => should return []
primeSumPair([146,272,537,977,150,808,933,909,716,741,317,469,128,148]);
