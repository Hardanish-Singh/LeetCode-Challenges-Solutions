// Leetcode: https://leetcode.com/problems/add-digits/

/**
 * @param { number } num
 * @return { number }
 */

var addDigits = function (num) {
        num = num.toString();
        while (num.length > 1) {
                num = num
                        .split("")
                        .map(Number)
                        .reduce((a, b) => a + b, 0)
                        .toString();
        }
        return num;
};
