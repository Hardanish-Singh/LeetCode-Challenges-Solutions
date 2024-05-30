// Leetcode: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/

const minOperations = (nums: number[]): number =>
    nums.reduce((accumulator: number, _, i: number) => {
        if (nums[i - 1] >= nums[i]) {
            accumulator += nums[i - 1] - nums[i] + 1;
            nums[i] = nums[i - 1] + 1;
        }
        return accumulator;
    }, 0);
