// Leetcode: https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/

/**
 * @param { number[] } nums
 * @return { number }
 */

var sumOfDigits = function (nums: number[]): number {
        return Math.min
                .apply(null, nums)
                .toString()
                .split("")
                .map(Number)
                .reduce((a: number, b: number) => a + b, 0) %
                2 ===
                0
                ? 1
                : 0;
};
