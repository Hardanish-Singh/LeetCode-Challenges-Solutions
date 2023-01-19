// Leetcode: https://leetcode.com/problems/largest-number/

/**
 * @param { number[] } nums
 * @return { string }
 */

const allEqual = (nums) => nums.every((n) => n === 0);

var largestNumber = function (nums) {
        if (allEqual(nums)) {
                return "0";
        }

        nums.sort((a, b) => {
                const num1 = String(a) + String(b);
                const num2 = String(b) + String(a);
                return num1 > num2 ? -1 : 1;
        });

        return nums.join("");
};
