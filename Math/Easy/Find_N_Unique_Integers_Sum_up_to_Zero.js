// Leetcode: https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

/**
 * @param { number } n
 * @return { number[] }
 */

var sumZero = function (n) {
    const arr = [];
    for (let i = 1; i <= parseInt(n / 2); i++) {
        arr.push(i, -i);
    }
    if (n % 2 != 0) {
        arr.push(0);
    }
    return arr;
};
