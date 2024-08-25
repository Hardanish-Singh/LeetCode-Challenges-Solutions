// Leetcode:

/**
 * @param {number} n
 * @return {string[]}
 */

// Solution 1
var fizzBuzz = (n) => {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
};

// Solution 2
var fizzBuzz = (n) =>
    Array.from({ length: n }, (_, i) =>
        (i + 1) % 3 === 0 && (i + 1) % 5 === 0
            ? "FizzBuzz"
            : (i + 1) % 3 === 0
            ? "Fizz"
            : (i + 1) % 5 === 0
            ? "Buzz"
            : String(i + 1)
    );
