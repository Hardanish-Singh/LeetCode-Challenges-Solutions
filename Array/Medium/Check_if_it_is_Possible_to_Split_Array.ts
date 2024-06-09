// Leetcode: https://leetcode.com/problems/check-if-it-is-possible-to-split-array/

// Solution 1
var canSplitArray = (nums: number[], m: number): boolean => {
    if (nums.length <= 2) {
        return true;
    }
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] >= m) {
            return true;
        }
    }
    return false;
};

// Solution 2
var canSplitArray = (nums: number[], m: number): boolean =>
    nums.length <= 2 || nums.some((num, i, nums) => num + nums[i + 1] >= m);
