// Leetcode: https://leetcode.com/problems/powx-n/

/**
 * @param { number } x
 * @param { number } n
 * @return { number }
*/

// SOLUTION 1: BRUTE FORCE
var myPow = function (x, n) {
        let power = 1;
        for (let i = 1; i <= Math.abs(n); i++) {
                power *= x;
        }
        return n < 0 ? 1 / power : power;
};

// SOLUTION 2: FAST POWER ALGORITHM
var myPow = function (x, n) {
        let power = 1;
        let product = x;
        for (let i = Math.abs(n); i > 0; i = parseInt(i / 2)) {
                if (i % 2 !== 0) {
                        power = power * product;
                }
                product = product * product;
        }
        return n < 0 ? 1 / power : power;
};