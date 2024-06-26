// Leetcode: https://leetcode.com/problems/missing-ranges/

const findMissingRanges = (nums: number[], lower: number, upper: number): number[][] => {
    // Check for empty nums
    if (nums.length === 0) return [[lower, upper]];

    const missingRange: number[][] = [];

    // Check missing ranges before nums
    if (lower < nums[0]) {
        missingRange.push([lower, nums[0] - 1]);
    }

    // Check missing ranges in nums
    for (let i = 1; i < nums.length; i++) {
        // Skip if there is no missing ranges between elements
        if (nums[i] - nums[i - 1] === 1) continue;

        // Skip if elements smaller than lower or Skip if elements larger than upper
        if (nums[i] < lower || nums[i] > upper) continue;

        missingRange.push([nums[i - 1] + 1, nums[i] - 1]);
    }

    // Check missing ranges after nums
    if (upper > nums[nums.length - 1]) {
        missingRange.push([nums[nums.length - 1] + 1, upper]);
    }

    return missingRange;
};
