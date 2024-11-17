// Leetcode: https://leetcode.com/problems/keep-multiplying-found-values-by-two/

// Solution 1
const findFinalValue = (nums: number[], original: number): number => {
    if (!nums.includes(original)) {
        return original;
    }
    return findFinalValue(nums, original * 2);
};
