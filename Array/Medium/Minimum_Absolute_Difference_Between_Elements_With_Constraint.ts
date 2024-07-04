// Leetcode: https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/

const minAbsoluteDifference = (nums: number[], x: number): number => {
    let min = Number.POSITIVE_INFINITY; // or Infinity;
    for (let i: number = 0; i < nums.length; i++) {
        if (i + x > nums.length - 1) {
            break;
        }
        for (let j: number = i + x; j < nums.length; j++) {
            min = Math.min(min, Math.abs(nums[i] - nums[j]));
        }
    }
    return min;
};
