// Leetcode: https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function (nums: Array<number>): number {
        var count = 0;
        for (let i: number = 0; i < nums.length; i++) {
                if (String(nums[i]).length % 2 === 0) {
                        count++;
                }
        }
        return count;
};
