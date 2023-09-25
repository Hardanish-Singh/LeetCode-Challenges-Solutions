// Leetcode: https://leetcode.com/problems/the-kth-factor-of-n/description/

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var kthFactor = function (n, k) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
        if (count === k) {
            return i;
        }
    }
    return -1;
};
