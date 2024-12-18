// Leetcode: https://leetcode.com/problems/fizz-buzz/

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
    Array.from({ length: n }, (_, i) => i + 1).map((num) =>
        num % 3 === 0 && num % 5 === 0 ? "FizzBuzz" : num % 3 === 0 ? "Fizz" : num % 5 === 0 ? "Buzz" : String(num)
    );
