// https://www.codewars.com/kata/59ce11ea9f0cbc8a390000ed
// Level 6kyu

/** Directions **/

// The prime number sequence starts with: 2,3,5,7,11. Notice that 2 is in position one.
//
// 3 occupies position two, which is a prime-numbered position. Similarly, 5 and 11 also occupy prime-numbered positions.
// We shall call primes such as 3,5,11 dominant primes because they occupy prime-numbered positions in the prime number sequence.
//
// As you can see, for the prime range range(0,10), there are only two dominant primes (3 and 5), which occupy prime-numbered
// positions 2 and 3 in the prime number sequence, and the sum of these primes is: 3 + 5 = 8.
//
// Given a range (a,b), what is the sum of dominant primes within that range? Note that a <= range <= b and b will not exceed 500000.

/** Function **/

function solve(a, b) {
    // reusing the prime function from day 56 with a small change
    let primes = [];
    function primeFinder(number) {
        let allNums = [];
        for (let i = 2; i <= number; i++) {
            if (!allNums[i]) {
                primes.push(i);
                for (let j = i << 1; j <= number; j += i)
                {
                    allNums[j] = true;
                }
            }
        }
        // console.log(primes);
        return primes;
    }
    primeFinder(b);
    console.log(primes);
    // need a variable to hold the primes that fall inside the range
    let rangedPrimes = [];
    for (let prime of primes) {
        if (prime >= a) {
            rangedPrimes.push(prime);
        }
    }
    console.log(rangedPrimes);
    // need value to hold sum of dominant primes
    let domPrimeSum = 0;
    // loop through the primes array and if the index is the value of a prime number + 1, add that number to the sum
    let index = 0;
    console.log('primes index is ' +primes[index]);
    while (index <= primes.length) {
        for (let p = 2; p < rangedPrimes.length; p++) {
        // console.log('increment of p ' + p, rangedPrimes[p - 1]);
            if (primes[index] === p) {
                console.log('index = ' + primes[index], p, rangedPrimes[p - 1]);
                domPrimeSum += rangedPrimes[p - 1];
                index++;
            }
        }
        index++;

    }
    console.log(domPrimeSum);
    return domPrimeSum;
}

// I'm not sure why this won't work, and with such an enormous data set, I am not willing to take more time to
// trouble shoot this one. Marking incomplete...

/** Advanced Solution (Refactored) **/

// No refactor today

/** Test Cases **/
// solve(0,10); // => 8
// solve(2,200); // => 1080
solve(200,2000); // => 48132
// solve(500,10000); // => 847039
// solve(4000,450000); // => 806250440


