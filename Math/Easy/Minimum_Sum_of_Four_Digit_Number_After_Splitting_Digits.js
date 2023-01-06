// Leetcode: https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

/**
 * @param {number} num
 * @return {number}
 */

var minimumSum = function (num) {
        num = String(num)
                .split("")
                .sort((a, b) => a - b);
        let num1 = Number(num[0] + num[2]);
        let num2 = Number(num[1] + num[3]);
        return num1 + num2;
};
