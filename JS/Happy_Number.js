// Leetcode: https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    while (true) {
        n = String(n)
            .split("")
            .reduce((acc, digit) => acc + Math.pow(Number(digit), 2), 0);
        if (n < 10) {
            return n === 1 || n === 7;
        }
    }
};
