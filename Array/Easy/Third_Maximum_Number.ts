// Leetcode: https://leetcode.com/problems/third-maximum-number/

// Solution 1
var thirdMax = (nums: number[]): number => {
    nums = Array.from(new Set(nums));
    nums.sort((a, b) => b - a);
    return nums[2] ?? nums[0];
};

// Solution 2
var thirdMax = (nums: number[]): number =>
    [...new Set(nums)].sort((a, b) => b - a)[2] ?? [...new Set(nums)].sort((a, b) => b - a)[0];

// Solution 3
var thirdMax = (nums: number[]): number =>
    Array.from(new Set(nums)).sort((a, b) => b - a)[2] ?? Array.from(new Set(nums)).sort((a, b) => b - a)[0];
