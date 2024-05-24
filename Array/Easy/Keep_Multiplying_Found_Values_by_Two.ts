// Leetcode: https://leetcode.com/problems/keep-multiplying-found-values-by-two/

// Solution 1
var findFinalValue = (nums: number[], original: number): number => {
    while (nums.includes(original)) {
        original *= 2;
    }
    return original;
};

// Solution 2
var findFinalValue = (nums: number[], original: number): number =>
    nums.indexOf(original) > -1 ? findFinalValue(nums, original * 2) : original;
