// Leetcode: https://leetcode.com/problems/monotonic-array

/**
 * @param {number[]} nums
 * @return {boolean}
 */

const isMonotonic = (nums) => {
    const isIncreasing = nums.every((num, index) => index === 0 || num >= nums[index - 1]);
    const isDecreasing = nums.every((num, index) => index === 0 || num <= nums[index - 1]);
    return isIncreasing || isDecreasing;
};
