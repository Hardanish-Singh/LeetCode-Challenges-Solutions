// Leetcode: https://leetcode.com/problems/add-digits/

/**
 * @param { number } num
 * @return { number }
 */

var addDigits = function (num) {
        let sum = num;
        num = String(num);
        while (num.length > 1) {
                sum = 0;
                for (let i = 0; i < num.length; i++) {
                        sum += Number(num[i]);
                }
                num = String(sum);
        }
        return sum;
};
