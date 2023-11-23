// Leetcode: https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    let zeros = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] === 0) {
            zeros++;
            nums.splice(i, 1);
        }
    }
    for (let i = 0; i < zeros; i++) {
        nums.push(0);
    }
    return nums;
};
